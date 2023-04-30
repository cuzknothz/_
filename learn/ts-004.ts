const getValByKey = <T, V extends keyof T>(obj: T, key: V) => {
  return obj[key];
};

getValByKey(
  {
    a: true,
    b: "dlkfal",
    c: 2,
  },
  "b"
);
