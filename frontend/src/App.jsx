import React from 'react'
import Parent from './component/Parent'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Navbar from './Pages/Navbar'
import Counter from './Pages/Counter'
import {Routes,Route} from 'react-router-dom'
import Effect from './component/Effect'

const App = () => {
  return (
    // Fragment Tag
     <>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/parent' element={<Parent/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/service' element={<Service/>}></Route>
       <Route path='/parent' element={<Parent/>}></Route>
       <Route path='/useState' element={<Counter/>}></Route>
       <Route path='/useEffect' element={<Effect/>}></Route>   
      </Routes>
    </>
  )
}
export default App