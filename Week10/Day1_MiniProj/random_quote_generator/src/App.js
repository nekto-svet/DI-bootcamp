import './App.css';
import React, { useEffect } from 'react';
import quotes from'./components/QuotesDatabase'


const firstRandomIndex = Math.floor(Math.random() * 94);
let usedIndexes = [firstRandomIndex, ];

function App() {
  const [currQuote, setQuote] = React.useState(quotes[firstRandomIndex]);

  const changeQuote = () => {
    const newRandomIndex = Math.floor(Math.random() * 94)
    if (usedIndexes.length === 93) {
      usedIndexes = [];
    } else if (usedIndexes.includes(newRandomIndex)) {
      changeQuote();
    } else {
      usedIndexes.push(newRandomIndex);
      setQuote(quotes[Math.floor(Math.random() * 94)])
    }
  }

  const [bgColor, setColor] = React.useState(getRandomColor());

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeColor(){
    setColor(getRandomColor());
  }

  function changeQuoteandColor(){
    changeQuote();
    changeColor();
    setVisible(false);
  }

  const [isVisible, setVisible] = React.useState(false);

  useEffect(() =>{
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }, )


  return (
    <div className='all' style={{backgroundColor: bgColor}}>
      <div className='main'>
        <div className={`quote ${isVisible?'visible':''}`} style={{color: bgColor}}>{currQuote.quote}</div>
        <div className={`author ${isVisible?'visible':''}`} style={{color: bgColor}}>{currQuote.author}</div>
        <button onClick={changeQuoteandColor} style={{backgroundColor: bgColor}}>Change Quote</button>
      </div>
    </div>
  );
}

export default App;
