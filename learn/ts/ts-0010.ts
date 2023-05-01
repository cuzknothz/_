type PromiseData<T> = Promise<T>;

type Result = Awaited<PromiseData<number>>;
