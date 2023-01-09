import React from 'react'
import "./page-3.css"
import Group from "../Assets/Group.png"
import { AiOutlineArrowRight } from "react-icons/ai"
import Ellipse26 from "../Assets/Ellipse26.png"
import ILLUSTRATION031 from "../Assets/ILLUSTRATION031.png"
import Ellipse12 from "../Assets/Ellipse12.png"
import group_1 from "../Assets/Group-1.png"
import group_2 from "../Assets/Group-2.png"
import Ellipse7 from "../Assets/Ellipse7.png"

const Page_3 = () => {
    return (
        <div className='Main_3'>
            <div className='All_Cards'>
            <div className='first_Box'>
                <img src={Group} alt="not-found-404" style={{ position: "relative", left: "85px" }} />
                <div style={{ position: "relative", left: "60px" }}>
                    <p style={{ fontSize: "23px", fontWeight: "600" }}>Advice & Guidance</p>
                    <p style={{ fontSize: "18px", color: "gray" }}>All activities in the UAE  are licensed. <br />
                        Whether manufacturing, finance, <br />
                        trading, marketing, consultancy or <br />
                        restaurants. In some countries only <br />
                        manufacturing is licensed. In others <br />
                        there is a threshold below which <br />
                        business are encouraged. Get our <br />
                        insightfull guidance today.</p>
                    <p style={{ fontSize: "23px", fontWeight: "600", color: "#525ded" }}>Learn More <AiOutlineArrowRight style={{ color: "#525ded", position: "relative", top: "5px" }} /> </p>
                </div>
            </div>
            <div>
                <p style={{ fontSize: "23px", fontWeight: "600", position: "relative", bottom: "2260px", left: "250px" }} >Learn the ways in which you can benefit <br />
                    from a UAE/Offshore Company. Then get <br />
                    started on fulfilling your UAE dream.</p>
                <p style={{ fontSize: "23px", fontWeight: "600", position: "relative", bottom: "2260px", left: "250px", color: "#525ded" }}>Claim a Free Quote</p>
            </div>
            <div className='second_Box'>
                <img src={ILLUSTRATION031} alt="not-found-404" style={{ position: "relative", left: "55px" }} />
                <div style={{ position: "relative", left: "60px" }}>
                    <p style={{ fontSize: "23px", fontWeight: "600" }}>Bank Account Setup</p>
                    <p style={{ fontSize: "18px", color: "gray" }}>
                        There are many banks in the United <br />
                        Arab Emirates [UAE]. Both locally <br />
                        owned and branches of <br />
                        multinational ones. Foreign banks <br />
                        adjust according to their parent's <br />
                        strategies and have changed local <br />
                        requirements overnight in the past. <br />
                        But we are here to help you.
                    </p>
                    <p style={{ fontSize: "23px", fontWeight: "600", color: "#525ded" }}>Learn More <AiOutlineArrowRight style={{ color: "#525ded", position: "relative", top: "5px" }} /> </p>
                </div>
            </div>
            <img src={Ellipse26} alt="not-found-404" style={{ position: "relative", bottom: "2350px", left: "850px" }} />
            <div className='third_Box'>
                <img src={group_1} alt="not-found-404" style={{ position: "relative", left: "55px" }} />
                <div style={{ position: "relative", left: "60px" }}>
                    <p style={{ fontSize: "23px", fontWeight: "600" }}>Registration Document <br /> Preparation</p>
                    <p style={{ fontSize: "18px", color: "gray" }}>
                        Several documents must be <br />
                        prepared to start the process of <br />
                        registering a new company in the <br />
                        United Arab Emirates. Be it a Dubai <br />
                        local company, a free zone one or an <br />
                        offshore entity. Your registered <br />
                        agent is dedicated to get this done <br />
                        for you for a seamless process.
                    </p>
                    <p style={{ fontSize: "23px", fontWeight: "600", color: "#525ded" }}>Learn More <AiOutlineArrowRight style={{ color: "#525ded", position: "relative", top: "5px" }} /> </p>
                </div>
            </div>
            <img src={Ellipse12} alt="not-found-404" style={{ position: "relative", bottom: "2750px", left: "400px" }} />
            <div className='fourth_Box'>
                <img src={group_2} alt="not-found-404" style={{ position: "relative", left: "55px" }} />
                <div style={{ position: "relative", left: "60px" }}>
                    <p style={{ fontSize: "23px", fontWeight: "600" }}>UAE Company Visas</p>
                    <p style={{ fontSize: "18px", color: "gray" }}>
                        Your application for visas is critical <br />
                        especially if you intend to move to <br />
                        Dubai. This becomes even more <br />
                        urgent if your family will also move <br />
                        with you. All the paperwork is done <br />

                        on your behalf smoothly so that you <br />
                        may only focus on doing what <br />
                        matters most to you.
                    </p>
                    <p style={{ fontSize: "23px", fontWeight: "600", color: "#525ded" }}>Learn More <AiOutlineArrowRight style={{ color: "#525ded", position: "relative", top: "5px" }} /> </p>
                </div>
            </div>
            <div>
                <div style={{ position: "relative", left: "760px", top: "40px" }}>
                    <p style={{ fontSize: "23px", fontWeight: "600", position: "relative", bottom: "2780px", left: "250px" }} >We have gathered a team of <br />
                        professionals to craft adequate <br />
                        services you can rely on for a friction <br />
                        free setup in UAE.</p>
                    <p style={{ fontSize: "23px", fontWeight: "600", position: "relative", bottom: "2780px", left: "250px", color: "#525ded" }}>More About our services <AiOutlineArrowRight style={{ position: "relative", top: "5px" }} /></p>
                </div>

            </div>
            <div className='second_class'>
            <div style={{ fontSize: "30px", fontWeight: "700", position: "relative", bottom: "2720px", left: "600px",textAlign:"center" }}>
                <p style={{position:"relative",right:"235px",top:"71px"}}>Most</p><p>popular affordable pricing <hr width={380} style={{backgroundColor:"orange",height:"6px",position:"relative",bottom:"15px"}} /> </p><p style={{position:"relative",left:"220px",bottom:"93px"}}>per</p><p style={{position:"relative",bottom:"120px"}}>jurisdictions are brought to you to <br />
                    kick off your adventure</p>
            </div> 
            </div>
            <img src={Ellipse7} alt="not-found-404" style={{position:"relative",bottom:"3050px",left:"250px"}} />
            <img src={Ellipse12} alt="not-found-404" style={{position:"relative",bottom:"3090px",left:"1150px"}} />
            </div>

        </div>


    )
}

export default Page_3
