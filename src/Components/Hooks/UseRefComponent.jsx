import React, { useEffect, useRef, useState } from 'react'

function UseRefComponent() {

  let count = useRef(0);
  let [num,setNum]=useState(0);

  // useEffect(() => {
  //   if (count.current >= 0  && count.current<20)
  //     count.current = count.current + 1;
  //   else if (count.current >= 20)
  //     count.current = 0;
  //   console.log(count.current);
  // });

  useEffect(()=>{
    count.current=count.current+1;
  })

  return (
    <>
      <h1>UseRef : {count.current}</h1>
      <h2>UseState : {num}</h2>
      <button onClick={()=>setNum(++num)}>Press Me</button>
    </>
  )
}

export default UseRefComponent