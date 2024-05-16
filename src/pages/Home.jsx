import React from 'react'

//importing homecard into home
import HomeCard from '../Components/HomeCard'
import AboutCard from '../Components/AboutCard'



const Home = () =>{
    
    
    
    return(
     
        <div style={{backgroundColor:'greenyellow',height:'85vh'}}>
          <h1 style={{margin:'20px',}}>
            Home
          </h1>
           <div className="cardContainer"style={{padding:'20px',display:'flex',justifyContent:'space-between'}}>
            <HomeCard/>

            <HomeCard/>

            <HomeCard/>
            
            <AboutCard/>
           </div>
        </div>

    )
}
export default Home
