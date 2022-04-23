import * as React from 'react';
import './App.css';

function App() {
  const [add, setAdd] = React.useState(0);
  const x = React.useRef();
  const y = React.useRef();

  const handleFetch = () => fetch(`https://fancy-adder.uc.r.appspot.com/?x=${x?.current?.value}&y=${y?.current?.value}`).then(res => res.json()).then(data => {
    setAdd(data.add)
  })

  return (
    <div className="App">
      <header className="App-header">
      <h1>The Most Complicated and Overly Programmed Adder Ever!</h1>
      <label>Enter the first number:</label>
      <input type="text" ref={x} style={inputStyle} />
      <br />
      <label>Enter the second number:</label>
      <input type="text" ref={y} style={inputStyle} />
      <button type="submit" onClick={handleFetch} style={buttonStyle}>submit</button>
      <h2>Your two numbers added up are: {add}</h2>
      </header>
    </div>
  );
}

export default App;

const inputStyle = {
  padding: '16px 32px',
  margin: '8px',
  borderRadius: '8px',
  border: 'none',
  fontSize: '24px'
}

const buttonStyle = {
  ...inputStyle,
  background: '#1F51FF',
  paddingLeft: '100px',
  paddingRight: '100px',
  color: 'white',
  fontSize: '16px'
}