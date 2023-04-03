export const checkOverflow = (textContainer: HTMLElement | null): boolean => {
  if (textContainer)
    return (
      textContainer.offsetHeight < textContainer.scrollHeight || textContainer.offsetWidth < textContainer.scrollWidth
    );
  return false;
};
