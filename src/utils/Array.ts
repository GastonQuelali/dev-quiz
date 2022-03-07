export const rotateArray = (array: number[]) => {
  const rotatedArr = array.slice(1, array.length);
  return [...rotatedArr, array[0]];
};
