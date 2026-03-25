import { useState } from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { Programs } from './Components/Programs/Program'
import { About } from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import { Contact } from './Components/Contact/Contact'
import { Footer } from './Components/Footer/Footer'
import {VedioPlayer} from './Components/VedioPlayer/VedioPlayer'



function App() {
 
  const [ playState , setPlayState] = useState(false)
  const [ page , setPage ] = useState("Home")

  return (
    <>

    <div className="wrapper">

     <Navbar setPage={setPage}/>
     
     <div className='container'>
     
      {page === "Home" &&  <Hero  />}
     

      {page === "Program" && <Programs />}

     
      {page === "About-Us" &&  <About playState={playState} setPlayState={setPlayState} />}
      

      {page === "Campus" &&  <Campus />}
        
      
      {page === "Testimonials" && <Testimonials /> }
      
      {page === "Contact" &&  <Contact />}
      
      </div>
      </div>
      <Footer />
    
      <VedioPlayer  playState={playState} setPlayState={setPlayState}/>
      
      
   
    </>
    
  )
}

export default App
