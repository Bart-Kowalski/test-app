import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [counter, setCounter] = useState<number>(0)

  const handleShowAlert = (value: number) => () => {
    alert("Hello React")
    setCounter(counter + 1);
  }

  useEffect(() => {
    setCounter(0);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{`Alert was shown: ${counter} times`}</div>
        <button onClick={handleShowAlert(0)}>Show alert</button>
      </header>
    </div>
  );
}

export default App;
