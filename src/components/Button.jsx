import React from 'react'

const Button = (backgroungObj, getRandomAll) => {

  
  const getRandomAll = () => {
    setRandomQuote (quotes[getRandomIndex(quotes)])
    setRandomColor (colors[getRandomIndex(colors)])

  }


  return (
    <button 
      className='card__btn' 
      style={backgroungObj} 
      onClick={getRandomAll}
      >&#62;</button>

  )
}

export default Button