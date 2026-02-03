import React, { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "chup" : "dikh"}
      </button>

      {show && <h2>This text can be toggled</h2>}
    </div>
  );
}

export default Toggle;
