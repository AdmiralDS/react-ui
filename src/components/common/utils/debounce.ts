export function debounce(f: () => void, delay: number): () => void {
  let timer = setTimeout(() => {});
  return function (...args: []) {
    clearTimeout(timer);
    timer = setTimeout(() => f.apply(args), delay);
  };
}
