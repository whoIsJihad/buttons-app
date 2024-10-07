import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(3);
  const [isToggled, setIsToggled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const buttons = [
    { label: "Increase by two", action: () => setCount(count + 2) },
    { label: "Decrease by two", action: () => setCount(count - 2) },
    {
      label: isToggled ? "Turn Off" : "Turn On",
      action: () => setIsToggled(!isToggled),
    },
    {
      label: isDisabled ? "Enable" : "Disable",
      action: () => setIsDisabled(!isDisabled),
    },
  ];
  return (
    <>
      <header>
        <h1>
        All about Button
        </h1>
      </header>
      <div className="section">
        <h2>Dynamic Buttons</h2>
        <div className="count">
          <p>Count: {count}</p>
          <p>Button is {isToggled ? "ON" : "OFF"}</p>

          <div className="buttons">
            {
              buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.action}
                  disabled={isDisabled}
                >
                  {button.label}
                </button>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
