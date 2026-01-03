import React, { useEffect, useState } from 'react'

function UseEffectComponent() {

  // const [count,setCount]=useState(0);
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setCount(count+1);
  //   },2000);
  // }); //it will be call again and again

  const [count,setCount]=useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1);
    },2000);
  },[]); //it will be call only once due to emply array including

  return (
    <div>{count}</div>
  )
}

export default UseEffectComponent