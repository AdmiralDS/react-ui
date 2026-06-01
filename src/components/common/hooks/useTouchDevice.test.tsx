import { renderHook, act } from '@testing-library/react';
import { detectTouchDevice, useTouchDevice } from './useTouchDevice';

function createMatchMediaMock(initialMatches: boolean) {
  let matches = initialMatches;
  const listeners = new Set<(e: MediaQueryListEvent) => void>();

  const mql: MediaQueryList = {
    matches,
    media: '',
    onchange: null,
    addEventListener: (type: string, listener: EventListenerOrEventListenerObject) => {
      if (type === 'change') {
        const fn = listener as (e: MediaQueryListEvent) => void;
        listeners.add(fn);
      }
    },
    removeEventListener: (type: string, listener: EventListenerOrEventListenerObject) => {
      if (type === 'change') {
        const fn = listener as (e: MediaQueryListEvent) => void;
        listeners.delete(fn);
      }
    },
    addListener: () => void 0,
    removeListener: () => void 0,
    dispatchEvent: () => false,
  } as unknown as MediaQueryList;

  const setMatches = (next: boolean) => {
    matches = next;
    // @ts-expect-error: reassign for test mock purposes
    mql.matches = next;
    const event = { matches: next } as MediaQueryListEvent;
    listeners.forEach((l) => l(event));
  };

  return { mql, setMatches };
}

function setupTouchEnvironment(
  queryMatches: Partial<Record<string, boolean>> = {},
  { hasTouchSupport = true }: { hasTouchSupport?: boolean } = {},
) {
  if (hasTouchSupport) {
    Object.defineProperty(window, 'ontouchstart', { value: () => {}, configurable: true, writable: true });
    Object.defineProperty(navigator, 'maxTouchPoints', { value: 5, configurable: true, writable: true });
  } else {
    Reflect.deleteProperty(window, 'ontouchstart');
    Object.defineProperty(navigator, 'maxTouchPoints', { value: 0, configurable: true, writable: true });
  }

  const mocks = new Map<string, ReturnType<typeof createMatchMediaMock>>();

  window.matchMedia = jest.fn((query: string) => {
    if (!mocks.has(query)) {
      mocks.set(query, createMatchMediaMock(queryMatches[query] ?? false));
    }
    return mocks.get(query)!.mql;
  }) as typeof window.matchMedia;

  return mocks;
}

const originalMatchMedia = window.matchMedia;
const originalMaxTouchPoints = navigator.maxTouchPoints;
const originalOntouchstart = window.ontouchstart;

describe('detectTouchDevice', () => {
  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    Object.defineProperty(navigator, 'maxTouchPoints', {
      value: originalMaxTouchPoints,
      configurable: true,
      writable: true,
    });
    Object.defineProperty(window, 'ontouchstart', {
      value: originalOntouchstart,
      configurable: true,
      writable: true,
    });
    jest.restoreAllMocks();
  });

  test('returns false without touch support even when coarse pointer matches', () => {
    setupTouchEnvironment({ '(pointer: coarse)': true }, { hasTouchSupport: false });
    expect(detectTouchDevice()).toBe(false);
  });

  test('returns false on touch-capable desktop without coarse pointer or hover:none', () => {
    setupTouchEnvironment({}, { hasTouchSupport: true });
    expect(detectTouchDevice()).toBe(false);
  });

  test('returns true when hover:none matches', () => {
    setupTouchEnvironment({ '(hover: none)': true });
    expect(detectTouchDevice()).toBe(true);
  });

  test('returns true when pointer:coarse matches (Samsung-like devices)', () => {
    setupTouchEnvironment({ '(pointer: coarse)': true });
    expect(detectTouchDevice()).toBe(true);
  });

  test('returns true when any-pointer:coarse matches', () => {
    setupTouchEnvironment({ '(any-pointer: coarse)': true });
    expect(detectTouchDevice()).toBe(true);
  });

  test('returns true when any-hover:none matches', () => {
    setupTouchEnvironment({ '(any-hover: none)': true });
    expect(detectTouchDevice()).toBe(true);
  });
});

describe('useTouchDevice', () => {
  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    Object.defineProperty(navigator, 'maxTouchPoints', {
      value: originalMaxTouchPoints,
      configurable: true,
      writable: true,
    });
    Object.defineProperty(window, 'ontouchstart', {
      value: originalOntouchstart,
      configurable: true,
      writable: true,
    });
    jest.restoreAllMocks();
  });

  test('returns false when no touch indicators match', () => {
    setupTouchEnvironment({ '(hover: none)': false, '(pointer: coarse)': false });
    const { result } = renderHook(() => useTouchDevice());
    expect(result.current).toBe(false);
  });

  test('detects touch device after mount via hover:none', () => {
    setupTouchEnvironment({ '(hover: none)': true });
    const { result } = renderHook(() => useTouchDevice());
    expect(result.current).toBe(true);
  });

  test('detects Samsung-like device via pointer:coarse without hover:none', () => {
    setupTouchEnvironment({ '(pointer: coarse)': true, '(hover: none)': false });
    const { result } = renderHook(() => useTouchDevice());
    expect(result.current).toBe(true);
  });

  test('returns false for mouse-only desktop', () => {
    setupTouchEnvironment({}, { hasTouchSupport: false });
    const { result } = renderHook(() => useTouchDevice());
    expect(result.current).toBe(false);
  });

  test('subscribes to media query change events and updates state', () => {
    const mocks = setupTouchEnvironment({ '(hover: none)': false });
    const { result } = renderHook(() => useTouchDevice());
    expect(result.current).toBe(false);

    act(() => mocks.get('(hover: none)')!.setMatches(true));
    expect(result.current).toBe(true);

    act(() => mocks.get('(hover: none)')!.setMatches(false));
    expect(result.current).toBe(false);
  });

  test('cleans up change event listeners on unmount', () => {
    const mocks = setupTouchEnvironment();
    const addSpies = Array.from(mocks.values()).map(({ mql }) => jest.spyOn(mql, 'addEventListener'));
    const removeSpies = Array.from(mocks.values()).map(({ mql }) => jest.spyOn(mql, 'removeEventListener'));

    const { unmount } = renderHook(() => useTouchDevice());

    addSpies.forEach((spy) => expect(spy).toHaveBeenCalledWith('change', expect.any(Function)));

    unmount();

    removeSpies.forEach((spy) => expect(spy).toHaveBeenCalledWith('change', expect.any(Function)));
  });
});
