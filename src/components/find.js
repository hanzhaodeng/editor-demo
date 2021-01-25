let find = (object, path) => {
  let curr = object;
  for (let currKey of path) {
    curr = curr[currKey];
  }
  return curr;
};
export { find };
