import React from 'react'
import UseStateComponent from './Hooks/UseStateComponent';
import UseEffectComponent from './Hooks/UseEffectComponent';

function Header() {
  return (
    <>
      <header>
        Header Content
      </header>
      {/* <UseStateComponent /> */}
      <UseEffectComponent/>
    </>
  )
}

export default Header