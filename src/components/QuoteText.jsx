import React from 'react'

const QuoteText = ({randomQuote}) => {

  
  return (
    <article>
    <p className='card__quote'>{randomQuote.quote}</p>
    <h1 className='card__author'>{randomQuote.author}</h1>
    </article>

  )
}

export default QuoteText