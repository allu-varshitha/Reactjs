import React from 'react'
//importing  Home into layout
import Home from '../pages/Home'
//import header into layout
import Header from '../Components/Header'
//import footer into layout
import Footer from '../Components/Footer'


//importing about
import About from '../pages/About'

const Mainlayout = () =>
    {
        return(
            <div>

              <Header/>

               {/* <About/>  */}
               <Home/>
              <Footer/> 
    
</div>

        )
    }
    export default Mainlayout