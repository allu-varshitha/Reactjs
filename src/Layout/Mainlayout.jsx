import React from 'react'
//importing  Home into layout
//import Home from '../pages/Home'
//importing about
import About from '../pages/About'
const Mainlayout = () =>
    {
        return(
            <div>
         <div className='Header' style={{height:'50px',backgroundColor:'beige'}}>
            Header
         </div>
        <About/> 
    
</div>

        )
    }
    export default Mainlayout