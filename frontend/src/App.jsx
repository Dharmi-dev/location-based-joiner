import React,{ useState } from 'react'
import './App.css'
import Button from './components/button'
import ProfilePage from './pages/profile'

function App() {

  return (
    <>
    <h1>hello Ganesh and Arjun</h1>
    <h2>Let's go something good</h2>
    <Button textValue={"let's go"}/>

    <ProfilePage userName={"ganesh"} userEmail={"ganesh@example.com"} userCote={"hello world"}/>
    </>
  )
}

export default App
