import React from 'react'

const Book = ({ title, author, img, count, incrementCount }) => {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'gray',
        borderRadius: '1rem ',
        marginBottom: '20px', // Adding margin for better spacing between books
      }}
    >
      <h1>{title}</h1>
      <img src={img} alt='img' style={{ maxWidth: '100px', height: 'auto' }} />
      <h5>{author.toUpperCase()} </h5>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  )
}

export default Book
