export function delay(ms: number) {
  new Promise((resolve) => setTimeout(resolve, ms));
}
