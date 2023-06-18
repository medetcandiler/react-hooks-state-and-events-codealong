function Toggle({handleToggleClick, isOn}) {
  console.log(isOn)

  return <button onClick={handleToggleClick}>{isOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
