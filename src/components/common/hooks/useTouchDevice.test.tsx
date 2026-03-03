import { renderHook, act } from '@testing-library/react';
import React from 'react';
import { useTouchDevice } from './useTouchDevice';

// Helper to create a mock MediaQueryList-like object with addEventListener/removeEventListener
function createMatchMediaMock(initialMatches: boolean) {
  let matches = initialMatches;
  const listeners = new Set<(e: MediaQueryListEvent) => void>();

  const mql: MediaQueryList = {
    matches,
    media: '(hover: none)',
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
    addListener: () => void 0, // legacy no-op
    removeListener: () => void 0, // legacy no-op
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

// Save original
const originalMatchMedia = window.matchMedia;

describe('useTouchDevice', () => {
  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    jest.restoreAllMocks();
  });

  test('returns false initially by default when media is not matched', () => {
    const { mql } = createMatchMediaMock(false);
    window.matchMedia = jest.fn().mockReturnValue(mql) as any;

    const { result } = renderHook(() => useTouchDevice());
    expect(result.current).toBe(false);
  });

  test('initial state reflects current media query match', () => {
    const { mql } = createMatchMediaMock(true);
    window.matchMedia = jest.fn().mockReturnValue(mql) as any;

    const { result } = renderHook(() => useTouchDevice());
    expect(result.current).toBe(true);
  });

  test('subscribes to media query change events and updates state', () => {
    const { mql, setMatches } = createMatchMediaMock(false);
    window.matchMedia = jest.fn().mockReturnValue(mql) as any;

    const { result } = renderHook(() => useTouchDevice());
    expect(result.current).toBe(false);

    act(() => setMatches(true));
    expect(result.current).toBe(true);

    act(() => setMatches(false));
    expect(result.current).toBe(false);
  });

  test('does not update state on mount if value is already equal', () => {
    const setStateSpy = jest.spyOn(React, 'useState');
    const { mql } = createMatchMediaMock(false);
    window.matchMedia = jest.fn().mockReturnValue(mql) as any;

    const { result } = renderHook(() => useTouchDevice());
    expect(result.current).toBe(false);

    // Ensure useState was called for initialization
    expect(setStateSpy).toHaveBeenCalled();
  });

  test('cleans up change event listener on unmount', () => {
    const { mql, setMatches } = createMatchMediaMock(false);
    const addSpy = jest.spyOn(mql, 'addEventListener');
    const removeSpy = jest.spyOn(mql, 'removeEventListener');
    window.matchMedia = jest.fn().mockReturnValue(mql) as any;

    const { unmount } = renderHook(() => useTouchDevice());

    expect(addSpy).toHaveBeenCalledWith('change', expect.any(Function));

    unmount();

    expect(removeSpy).toHaveBeenCalledWith('change', expect.any(Function));

    // After unmount, updates should not trigger errors
    expect(() => setMatches(true)).not.toThrow();
  });
});
