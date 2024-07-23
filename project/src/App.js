// const App =() =>{
//   return React.createElement('pre',{},'hello world')
// }

import React, { useState } from 'react'
import Book from './Components/Book'

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const books = [
    {
      title: 'The Book Title1',
      author: 'Someone1',
      img: 'image1.jpg',
    },
    {
      title: 'The Book Title2',
      author: 'Someone2',
      img: 'image2.jpg',
    },
    {
      title: 'The Book Title3',
      author: 'Someone3',
      img: 'image3.jpg',
    },
    // Add more books as needed
  ]

  return (
    <div>
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          img={book.img}
          count={count}
          incrementCount={incrementCount}
        />
      ))}
    </div>
  )
}

export default App
