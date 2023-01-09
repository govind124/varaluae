import React from 'react';
import {FiSearch} from "react-icons/fi";
import "./page-1.css";
import ILLUSTRATION from "../Assets/ILLUSTRATION.png"
import Group117 from "../Assets/Group117.png"

const Page_1 = () => {
  return (
    <div >
         <div className='searchContainer'>
         <input style={{border:"none",width:"250px"}} type="text" placeholder='Search a Term | Topic' value={"Search a Term | Topic"} />
         <FiSearch className='searchIcon' />
         </div>
         <p style={{color:"#525ded",fontSize:"25px",position:"relative",left:"25px",bottom:"70px"}}>Claim a Free Quote</p>
         
        <p style={{fontSize:"60px",width:"fitContent",fontWeight:"800",position:"relative",bottom:"140px",left:"15px"}}>Get started <div className='HRLine'>
        <hr  style={{width:"330px",height:"10px", bottom:"44px",right:"-5px",position:"relative" ,  backgroundColor:"orange"}} />
        </div></p> 
        <p style={{fontSize:"60px",width:"fitContent",fontWeight:"800",position:"relative",bottom:"325px",left:"370px"}}>on Fulfilling</p>
        <p style={{fontSize:"60px",width:"fitContent",fontWeight:"800",position:"relative",bottom:"400px",left:"20px"}}>
        your Dubai or UAE <br /> dream.
        </p>
    
        <img className='illu' src={ILLUSTRATION} alt="not-found 404"  />
    

      <p style={{color:"#525ded",fontSize:"25px",position:"relative",left:"25px",bottom:"1050px"}}>UAE & Offshore Company</p>
      <p className='lecture_01'>We Provide you with information about UAE or <br /> Offshore Company Registration & Help you <br /> setup your Company
       with a bank account and <br /> visas
      </p>
      
      <div className='buttons' style={{position:"relative",bottom:"950px"}}>
      <button className='firButton'>Start a Company</button><button className='secButton'>Renew a Company</button> 
      </div>
         
      <p style={{color:"#525ded",position:"relative",bottom:"1020px",left:"400px",fontSize:"19px",fontWeight:"400"}}>Watch the video about UAE or OffShore Company Registration</p>
      <div className="circle"> 
      <img className='playButton' src={Group117} alt="not-fount-404" style={{position:"relative",top:"5px",left:"7px"}} />
      </div>
      
      
    </div>
  )
}

export default Page_1
