import { useImmer } from "use-immer";
import { Dispatch, SetStateAction } from "react";

// v1
// const useCount = (): [number, Dispatch<SetStateAction<number>>] => {
//   const [count, setCount] = useImmer(0);

//   return [count, setCount];
// };

// v2
const useCount = () => {
  const [count, setCount] = useImmer(0);

  return [count, setCount] as const;
};

const App = () => {
  const [count, setCount] = useCount();

  setCount(2);
  return <></>;
};
