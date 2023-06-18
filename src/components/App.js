import { useState } from "react";
import Toggle from "./Toggle";

function App() {
  const [isOn, setIsOn] = useState(true);

  const handleToggleClick = () => {
    setIsOn(prev => !prev);
  } 

  const color = isOn ? 'white' : 'red'

  return (
    <div style={{background: color}}>
      <h3>Toggle</h3>
      <Toggle isOn={isOn} handleToggleClick={handleToggleClick} />
    </div>
  );
}

export default App;
