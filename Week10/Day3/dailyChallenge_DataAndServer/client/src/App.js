import './App.css';
import React from 'react';

function App() {
  const [header, setHeader] = React.useState();
  const [input, setInput] = React.useState('');
  const [answer, setAnswer] = React.useState('');

  const getData = async() => {
    try{
      const response = await fetch('http://localhost:3001/hello')
      const data = await response.json();
      setHeader(data.msg)
    }
    catch (err){
      console.log(err);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:3001/world', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({msg:input}),
      })
      const data = await response.json();
      setAnswer(data.answer);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{header?header:null}</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type='text' onChange={(e) => handleChange(e)}/>
          <input type='submit' value='Send'/>
        </form>
        <div>{answer?answer:null}</div>
      </header>
    </div>
  );
}

export default App;
