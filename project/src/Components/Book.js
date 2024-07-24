import React from 'react'

const Book = ({ title, author, img, count, incrementCount, decrementCount }) => {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'gray',
        borderRadius: '1rem ',
        marginBottom: '20px', // Adding margin for better spacing between books
      }}
     onMouseOver={() =>{
      console.log(title)
     }
     }>
      <h1>{title}</h1>
      <img src={img} alt='img' style={{ maxWidth: '100px', height: 'auto' }} />
      <h5>{author.toUpperCase()} </h5>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={decrementCount}>decrement Count</button>
    </div>
  )
}

export default Book
