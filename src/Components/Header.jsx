import React,{useState,useEffect} from 'react'
import UseStateComponent from './Hooks/UseStateComponent';
import UseEffectComponent from './Hooks/UseEffectComponent';
import UseRefComponent from './Hooks/UseRefComponent';

function Header() {

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <>
      <header>
        Header Content : <span style={{color:"yellow"}}>{dateTime.toLocaleString()}</span>
      </header>
      {/* <UseStateComponent /> */}
      {/* <UseEffectComponent/> */}
      {/* <UseRefComponent/> */}
    </>
  )
}

export default Header