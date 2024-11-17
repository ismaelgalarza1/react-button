import React, { useState } from "react";

const Button = () => {
  // track the number of clicks
  const [clickCount, setClickCount] = useState(0);

  // Click event handler
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleClick}>Click Me</button>
      <p>You have clicked the button {clickCount} times.</p>
    </div>
  );
};

export default Button;
