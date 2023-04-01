import React, { useMemo } from "react";
import { useMousePosition } from "react-haiku";
import { useMouse, useWindowSize } from "react-use";

export const OverLay = () => {
  const ref = React.useRef(null);

  const { x, y } = useMousePosition();
  const { width, height } = useWindowSize();

  return (
    <div ref={ref} className="absolute inset-0">
      <div>
        Mouse position in document - x:{x / width - 0.5} y:
        {y / height - 0.5}
      </div>
    </div>
  );
};
