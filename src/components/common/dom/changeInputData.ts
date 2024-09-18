export interface InputData {
  value?: string;
  selectionStart?: number | null;
  selectionEnd?: number | null;
}

export function isInputDataDifferent(data1: InputData, data2: InputData): boolean {
  return (
    data1.value !== data2.value ||
    data1.selectionStart !== data2.selectionStart ||
    data1.selectionEnd !== data2.selectionEnd
  );
}

export type CustomInputHandler = (newInputData: InputData | null, e?: InputEvent) => InputData;

export function changeInputData(input: HTMLInputElement | HTMLTextAreaElement, toChangeData: InputData): void {
  const { value = input.value, selectionStart, selectionEnd } = toChangeData;

  if (isInputDataDifferent(input, { value, selectionStart, selectionEnd })) {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value')?.set;
    nativeInputValueSetter?.call(input, value);
    //input.value = value;

    // Safari focus the element containing selection when modifying the seletion programmatically.
    if (typeof selectionStart === 'number' && typeof selectionEnd === 'number') {
      input.setSelectionRange(selectionStart, selectionEnd);
    }

    // IE fix: event dispatch
    let event;
    if (typeof Event === 'function') {
      event = new Event('input', { bubbles: true });
    } else {
      event = document.createEvent('Event');
      event.initEvent('input', true, true);
    }

    input.dispatchEvent(event);
  }
}
