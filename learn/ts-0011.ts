const func = async () => {
  return {
    id: Math.random(),
  };
};

type ResultType = Awaited<ReturnType<typeof func>>;
