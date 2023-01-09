import React from 'react'
import "./page-4.css"
import {BiCheckCircle} from "react-icons/bi"
import group_100  from "../Assets/Group100.png"

const Page_4 = () => {
    return (
        <div className='Main_4'>
            <div className='three_cards'>
            <div className='class' id='first-class'>
                <b style={{position: "relative",left:"18px"}}>AJMAN OFFSHORE</b> <br />
                <p>
                    <b style={{position:"relative", fontWeight: "800", fontSize: "21px",left:"20px" }}>$2,997  </b>
                    <p style={{ color: "gray", position: "relative", bottom: "35px", fontSize: "14px", left: "100px" }}>One Time Payment</p>
                </p>
                <p style={{ position: "relative", bottom: "36px",left:"20px" }}>Ajman Offshore New Company  <br />
                    formation includes</p>
                <div style={{position:"relative",bottom:"30px",left:"20px"}}>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Attention Charges</p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Registered Agent </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Registered Office</p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Varal Administrative</p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Preparing Statutory File
                 </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Liasing with Registration Authorities
                   </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Due Diligence Appraisal
               </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Keeping The Register
              </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Certificate of Good Standing
               </p>
                </div>
            <div className='Buttons'><p>Continue</p></div>
            </div >
            <div className='class' id='second-class'>
            <b style={{position: "relative",left:"18px"}}>RAK ICC</b> <br />
                <p>
                    <b style={{ fontWeight: "800", fontSize: "21px",position: "relative",left:"15px" }}>$4,9124  </b>
                    <p style={{ color: "white", position: "relative", bottom: "35px", fontSize: "14px", left: "100px" }}>One Time Payment</p>
                </p>
                <p style={{ position: "relative", bottom: "36px",left:"15px" }}>Rak Icc New Company formation   <br />
                includes </p>
                <span style={{position:"relative",bottom:"30px",left:"15px"}}>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Attention Charges</p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Registered Agent </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Registered Office</p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Varal Administrative</p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Preparing Statutory File
                 </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Liasing with Registration Authorities
                   </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Due Diligence Appraisal
               </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Keeping The Register
              </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Certificate of Good Standing
               </p>
                </span>
            <div className='Buttons' id="button-2"><p>Continue</p></div>
            </div>
            <div className='class' id='third-class'>
            <b style={{position: "relative",left:"18px"}}>SHARJAH MEDIA CITY</b> <br />
                <p>
                    <b style={{ fontWeight: "800", fontSize: "21px",position: "relative",left:"15px" }}>$4,9124  </b>
                    <p style={{ color: "gray", position: "relative", bottom: "35px", fontSize: "14px", left: "100px" }}>One Time Payment</p>
                </p>
                <p style={{ position: "relative", bottom: "36px",left:"20px" }}>Sharjah Media City New  <br />
                Company formation include </p>
                <span style={{position:"relative",bottom:"30px",left:"20px"}}>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Attention Charges</p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Registered Agent </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Registered Office</p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Varal Administrative</p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Preparing Statutory File
                 </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Liasing with Registration Authorities
                   </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Due Diligence Appraisal
               </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Keeping The Register
              </p>
                <p><BiCheckCircle style={{position:"relative",top:"2px"}} />Certificate of Good Standing
               </p>
                </span>
            <div className='Buttons'><p>Continue</p></div>
            </div>
            <div className='image_Bracket'>
            <img src={group_100} alt="not-found-404" style={{position:"relative",top:"380px"}} />
            </div>

        </div>
        </div>
    )
}

export default Page_4