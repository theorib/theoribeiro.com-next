export function roundUp(num: number, margin?: number) {
  return Math.ceil(margin ? num * margin : num);
}
