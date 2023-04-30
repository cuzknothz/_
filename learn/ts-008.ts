type Func = (a: number, b: number) => number;

type ReturnFunc = ReturnType<Func>;

type ParamsFunc = Parameters<Func>;
