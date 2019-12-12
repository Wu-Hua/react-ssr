import React, { useState } from 'react'

function App(props) {
  const [count, setCount] = useState(1)
  return (
    <div>
      <h1>hello {props.title}! {count}</h1>
      <button onClick={_ => setCount(count + 1)}>累加</button>
    </div>
  )
}

export default App