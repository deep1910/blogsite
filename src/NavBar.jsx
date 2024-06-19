import React from 'react'

function NavBar() {
  return (
    <div >
        <div style={{display:'flex', backgroundColor:'gray'}}>
             <ul style={{display:'flex', flexDirection:'row',gap:20 , listStyleType:'none'}}>
                <li  style={{fontSize:35}}>Home</li>
                <li style={{fontSize:35}}>Blogs</li>
                <li style={{fontSize:35}}>Contact</li>
             </ul>
        </div>

    </div>
  )
}

export default NavBar