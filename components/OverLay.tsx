import React, { useMemo } from "react";
import { useMouse, useWindowSize } from "react-use";

export const OverLay = () => {
  const ref = React.useRef(null);

  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);
  const { width, height } = useWindowSize();

  return (
    <div ref={ref} className="absolute inset-0">
      <div>
        Mouse position in document - x:{docX / width - 0.5} y:
        {docY / height - 0.5}
      </div>
    </div>
  );
};
