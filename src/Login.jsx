import React from 'react'

import Button from './Button'
import LoginButton from './components/LoginButton'
import Test from './components/Text'

export default function Login() {
  const mail = "mail@abc.com"
  return (
    <>
      <LoginButton />
      <Button />
      <Test placeholder={mail}/>
    </>
    
  )
}