type PickHandle<T, K extends keyof T> = {
  [P in K]: T[P];
};

type OmitHandle<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type Person = {
  id: number;
  name: string;
  age: number;
};

type OmitUser = Omit<Person, "name">;

type OmitImplement = OmitHandle<Person, "age">;

type PickUser = Pick<Person, "age">;

type PickImplement = PickHandle<Person, "id" | "age">;
