import { Icon } from "next/dist/lib/metadata/types/metadata-types";

type IconProps = {
  size: "sx" | "sm" | Omit<string, "sx" | "sm">;
};

type LooseAutoComplete<T extends string> = T | Omit<string, T>;

type IconPropsImproment = {
  size: LooseAutoComplete<"sx" | "sm">;
};

const Icon = (props: IconPropsImproment): JSX.Element => {
  return <></>;
};
const App = (): JSX.Element => {
  return (
    <>
      <Icon size="sm" />
    </>
  );
};
