// const App =() =>{
//   return React.createElement('pre',{},'hello world')
// }

import React, { useState } from 'react'
import Book from './Components/Book'

import Carditem from './Components/Carditem'
import Timer from './Components/Timer'

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }
  const decrementCount = () => {
    if (count > 0) setCount(count - 1)
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
  const name = 'poorna'

  const data = [
    {
      head: 'poornashri',
      des: 'devloper',
    },
    {
      head: 'poornashri',
      des: 'devloper',
    },
    {
      head: 'poornashri',
      des: 'devloper',
    },
  ]

  return (
    <div>
      {books.map((book, index) => (
        <Book
          key={index}
          {...book}
          // title={book.title}
          // author={book.author}
          // img={book.img}
          count={count}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
        />
      ))}
      {/* <TestingJsx name={name}/> */}
      {data.map((info, index) => (
        <Carditem key={index} {...info} />
      ))}

      <Timer />
    </div>
  )
}

export default App
