// import React, { useState } from 'react'

// withou memo
// const ChildComponent = ({ counter }) => {
//   console.log('ChildComponent rendered')
//   return <p>Counter: {counter}</p>
// }

// const ParentComponent = () => {
//   const [counter, setCounter] = useState(0)
//   const [text, setText] = useState('')

//   return (
//     <div>
//       <ChildComponent counter={counter} />
//       <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder='Type something'
//       />
//     </div>
//   )
// }

// export default ParentComponent


//with memo
import React, { useState } from 'react'

// Wrap the ChildComponent with React.memo
const ChildComponent = React.memo(({ counter }) => {
  console.log('ChildComponent rendered')
  return <p>Counter: {counter}</p>
})

const ParentComponent = () => {
  const [counter, setCounter] = useState(0)
  const [text, setText] = useState('')

  return (
    <div>
      <ChildComponent counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type something'
      />
    </div>
  )
}

export default ParentComponent

