import React,{ useState } from 'react'

function Button_details() {
    const [count, setCount] = useState(0);
    const [isToggled, setIsToggled] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
  
    const buttons = [
      { label: "Increase by two", action: () => setCount(count + 2) },
      { label: "Decrease by two", action: () => setCount(count - 2) },
      {
        label: isToggled ? "Turn Off" : "Turn On",
        action: () => setIsToggled(!isToggled),
      },
    ];
  
    return (
      <>
        <header>
          <h1>All about Button</h1>
        </header>
        <div className="section">
          <h2>Dynamic Buttons</h2>
          <div className="count">
            <p>Count: {count}</p>
            <p>Button is {isToggled ? "ON" : "OFF"}</p>
  
            <div className="buttons">
              
              {buttons.map((button, index) => (
                <button key={index} onClick={button.action} disabled={isDisabled}>
                  {button.label}
                </button>
              ))}
  
            </div>
  
            {/* Independent Enable/Disable Button */}
            <button onClick={() => setIsDisabled(!isDisabled)}>
              {isDisabled ? "Enable" : "Disable"} Buttons
            </button>
          </div>
        </div>
      </>
    );
}

export default Button_details
