import { useState } from "react"


const ControlledInput = () => {
  const [value, setValue] = useState('')

  return <input value={value} onChange={(e) => setValue(e.target.value)}  />
}

export default ControlledInput;
