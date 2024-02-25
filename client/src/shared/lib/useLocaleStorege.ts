export function saveState<T>(
  state: T,
  key: string,
) {
  const value = JSON.stringify(state);
  localStorage.setItem(key, value);
}
export function loadState<T>(
  key: string,
): T | undefined {
  const value = localStorage.getItem(key);
  if (value == null) {
    return undefined;
  }
  return JSON.parse(value);
}
