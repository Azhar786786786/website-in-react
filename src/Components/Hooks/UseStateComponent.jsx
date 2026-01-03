import React, { useState } from 'react'

function UseStateComponent() {

  let [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Count++</button>
    </>
  )
}

export default UseStateComponent