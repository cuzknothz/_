import React from "react";
import { useImmer } from "use-immer";
import { useRef } from "react";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [user, setUser] = useImmer<User>({} as User);
  const ref = useRef<HTMLDivElement>(null);
  const countRef = useRef<number>(0);

  const changeUser = () => setUser({ id: 113, name: "sadf" });
  return (
    <>
      <div ref={ref}></div>
    </>
  );
};

export default App;
