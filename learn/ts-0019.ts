interface Animal {
  id: number;
  name: string;
  age: number;
  sex: "male" | "female";
  meta: {
    a: boolean;
    b: "yoo";
  };
}

type TurnToReadOnly<T> = {
  +readonly [P in keyof T]: T[P] extends object ? TurnToReadOnly<T[P]> : T[P];
};

type AnimalReadonly = TurnToReadOnly<Animal>;
