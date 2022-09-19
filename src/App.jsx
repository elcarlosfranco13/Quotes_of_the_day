import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from "./json/quotes.json"
import colors from "./utils/colors"

function App() {

  const getRandomIndex = arr => Math.floor(Math.random() * arr.length)

  const firstQuote = quotes[getRandomIndex(quotes)]
  const firstColor = colors[getRandomIndex(colors)]
  
  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObject = {
    backgroundColor: randomColor
  }
  const backgroungObj = {
    backgroundColor: randomColor
  }

  const getRandomAll = () => {
    setRandomQuote (quotes[getRandomIndex(quotes)])
    setRandomColor (colors[getRandomIndex(colors)])

  }



  return (
    <div style={backgroundObject} className="App">
    <QuoteBox 
      randomQuote={randomQuote} 
      randomColor={randomColor}
      getRandomAll={getRandomAll}
    />
    </div>
  )
}

export default App
