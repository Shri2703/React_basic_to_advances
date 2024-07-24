import { useRef } from "react"

const UncontrolledInput = () => {
  const inputRef = useRef(null)

  const handleSubmit = () => {
    alert(inputRef.current.value)
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UncontrolledInput;
