import {
  MouseEventHandler,
  FocusEventHandler,
  FormEventHandler,
  ReactNode,
} from "react";

interface ComponentProps {
  onClick: MouseEventHandler;
  onFocus: FocusEventHandler;
  onBlur: FocusEventHandler;
  onChange: FormEventHandler;
  children: ReactNode;
}

const Component = (props: ComponentProps) => {
  return <button {...props}>Click</button>;
};

const App = () => {
  return (
    <Component
      onClick={(e) => {}}
      onBlur={(e) => {}}
      onChange={(e) => {}}
      onFocus={(e) => {}}
    >
      children
    </Component>
  );
};
