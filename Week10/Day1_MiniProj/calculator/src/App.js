import './App.css';
import React from 'react';

function App() {

  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const [result, setResult] = React.useState();
  const [operation, setOperation] = React.useState();

  const calculate = (e) => {
    e.preventDefault();
    switch (operation) {
      case '+':
        setResult(+num1 + +num2);
        break;
      case '-':
        setResult(+num1 - +num2);
        break;
      case '*':
        setResult(+num1 * +num2);
        break;
      case '/':
        setResult(+num1 / +num2);
        break;
      default:
        setResult('Pleace choose an operation');
    }
    
  }
  
  return (
    <div id='main'>
      <form>
        <div id="wrapper">
          <select id="operation" value={operation} onChange={(e) => setOperation(e.target.value)}>
            <option value="">Operation</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input type="number" className="num" value={num1} onChange={(e) => setNum1(e.target.value)}/>
          <input type="number" className="num" value={num2}  onChange={(e) => setNum2(e.target.value)}/>
        </div>
        <input type="submit" id="submit" value="Calculate them!" onClick={calculate} /> 
      </form>
    <div id='result'>{result}</div>
</div>
  );
}

export default App;
