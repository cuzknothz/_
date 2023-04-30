type User = {
  id: number;
  name: string;
  age: number;
};

type UserReadOnly = Readonly<User>;

type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

type UserMutable = Mutable<User>;
