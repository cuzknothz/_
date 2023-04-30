interface Animal {
  id: number;
  name: string;
  age: number;
  sex: "male" | "female";
}

type TurnToReadOnly<T> = {
  +readonly [P in keyof T]: T[P];
};

type AnimalReadonly = TurnToReadOnly<Animal>;
