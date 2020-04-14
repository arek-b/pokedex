export function addTo(array, item) {
  return [...array, item];
}

export function removeFrom(array, item) {
  return array.filter((x) => x !== item);
}
