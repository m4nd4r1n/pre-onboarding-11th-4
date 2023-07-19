export const debounce = (fn: Function, delay: number) => {
  let timer: number | null = null;
  return (...args: unknown[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
