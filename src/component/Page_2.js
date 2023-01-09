import React from 'react'
import "./page-2.css"
import vector_1 from "../Assets/Vector-1.png"
import vector_2 from "../Assets/Vector-2.png"
import dungeon from "../Assets/dungeon.png"
import Ellipse19 from "../Assets/Ellipse19.png"
import Ellipse24 from "../Assets/Ellipse24.png"


const Page_2 = () => {
  return (
    <div className='Main_2'>
      <p style={{ fontSize: "40px", fontWeight: "700", position: "relative", bottom: "1100px", left: "550px" }}>Dedicated <div className='sechr_Line'>
      <hr width={195} style={{ height: "7px", backgroundColor: "orange", position: "relative", bottom: "20px", right: "4px" }} />
      </div></p>
      <p style={{ fontSize: "40px", fontWeight: "700", position: "relative", bottom: "1160px", left: "470px" }}>to our mission we are</p>
      <div className='Dedicated' style={{ position: "relative", bottom: "1180px",left:"360px", fontSize: "23px", fontWeight: "bold", color: "gray", }}>
        <p style={{ textAlign: "center" }}>
          Our services include Company Formation & Renewals, <br />
          Trust & Fiduciary, Tax Residency Setup With Family, Bank <br />
          Accounts, Remote Management, Stock Trading <br />
          Platforms, Ownership Solutions.
        </p>
      </div>
      <div className='UAE_Dubai_Offshore'>
      <div className='UAEhome' style={{ position: "relative", bottom: "1115px", left: "40px" }}>
        <img src={dungeon} alt="not-found-404" />
        <p style={{ fontSize: "22px", fontWeight: "bold" }}>UAE Free Zone Company</p>
        <p style={{ fontSize: "19px", fontWeight: "bold", color: "gray" }}>Your registration agent, will answer all <br />
          of your questions and help you to reach <br />
          a conclusion that meets your objectives <br />
          of investing in the UAE</p>
        <p style={{ fontSize: "22px", color: "orange" }}>Get Started</p>
      </div>
      <div className='DubaiLocal' style={{ position: "relative", bottom: "1408px", left: "550px"}}>
        <img src={vector_2} alt="not-found-404" />
        <p style={{ fontSize: "22px", fontWeight: "bold"}}>Dubai Local Companies</p>
        <p style={{ fontSize: "19px", fontWeight: "bold", color: "gray" }}>The Dubai LLC formation documents <br />
          are actually articles of organization or a  <br />
          certificate of organization. You can get <br />
          yours today.</p>
        <p style={{ fontSize: "22px", color: "orange" }}>Get Started</p>
      </div>
      </div>
      <div className='Offshore' style={{ position: "relative", bottom: "1710px", left: "1060px" }}>
        <img src={vector_1} alt="not-found-404" />
        <p style={{ fontSize: "22px", fontWeight: "bold" }}>Offshore Companies</p>
        <p style={{ fontSize: "19px", fontWeight: "bold", color: "gray" }}>You can register an offshore company <br />
          and open its bank account in Dubai. <br />
          Your agent will help you along all the <br />
          process</p>
        <p style={{ fontSize: "22px", color: "orange" }}>Get Started</p>
      </div>
      <div className='eclipse'>
      <img src={Ellipse19} alt="not-found-404" style={{position:"relative",right:"160px",bottom:"25px"}} />
      <img src={Ellipse24} alt="not-found-404" style={{position:"relative",left:"370px",top:"25px"}}/>
      </div>


    </div>
  )
}

export default Page_2
