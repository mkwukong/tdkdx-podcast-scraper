export function verifyParams(start: number, end: number) {
  return new Promise((resolve, reject) => {
    if (isNaN(start) || (isNaN(end) && end !== undefined)) {
      reject("Parameters must be numbers");
    } else if (end === undefined) {
      resolve({
        start: start,
        end: start,
      });
    }

    resolve({
      start: start,
      end: end,
    });
  });
}
