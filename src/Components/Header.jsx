import React from 'react'

const Header = () => {
  return (
    <div classname='header'>
      <div style={{width:'100%',height:'60px',backgroundColor:'cyan',}}>
      <div className="container" style={{width:'30%',height:'inherit',display:'flex',
        alignItems:'center',marginLeft:'68%',columnGap:'20px',
      }}>
        {/* Header component */}
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>Gallery</div>
      </div>
       </div>
    </div>
  )
}

export default Header
//flexDirection:'row-reverse'
//justifyContent:'space-between'