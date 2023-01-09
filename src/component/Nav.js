import React from 'react'
import "./header.css"
import mainLogo from "../Assets/Group114.png"

const Nav = () => {
  return (
    <>
       
    <img src={mainLogo} alt="image-104" style={{position:"relative",left:"75px",top:"10px"}} />
    <span>
        <ul className='main_options'> 
            <p>Home</p>
            <p>Services</p>
            <p>Pricing</p>
            <p>About us</p>
        </ul>
        <div className='div' style={{width:"fitContent"}}><p>Start a Company</p></div>

    </span>
         
    </>
  )
}

export default Nav;