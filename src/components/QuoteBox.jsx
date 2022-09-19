import React from 'react'
import QuoteText from './QuoteText'

const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {

  const colorObj = {
    color: randomColor
  }
  const backgroungObj = {
    backgroundColor: randomColor
  }

  console.log(randomColor)
  return (
    <article style={colorObj} className='card'>
      <QuoteText 
        randomQuote={randomQuote} />
      <button 
      className='card__btn' 
      style={backgroungObj} 
      onClick={getRandomAll}
      >&#62;</button>
    </article>

  )
}

export default QuoteBox