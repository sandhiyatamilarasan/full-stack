import React from 'react'
import Parent from './component/Parent'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Navbar from './Pages/Navbar'
import Counter from './Pages/Counter'

const App = () => {
  return (
    // Fragment Tag
    <>
    
      <h1>Hello World!</h1>
      <h2>Hello World!</h2>
      <Navbar/>
      <Parent/>
      <Home/>
      <About/>
      <Contact/>
      <Service/>
      <Counter/>
      
    </>
  )
}
export default App

