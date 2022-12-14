export default (arr, callback) => {
  const startTime = performance.now();
  callback(arr);
  const endTime = performance.now();
  return endTime - startTime;
};
