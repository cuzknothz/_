const callAPI = async <T>(): Promise<T> => {
  const res = await fetch("/");
  return await res.json();
};

const data = callAPI<{ aha: boolean }>();
