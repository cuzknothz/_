type MyReturnType<T> = T extends (...arg: any[]) => infer R ? R : T;

type b = () => void;

type A = ReturnType<b>;

type C = boolean extends true ? 1 : 0;
