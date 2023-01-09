import React from 'react'
import "./page-5.css"
import { FaRssSquare } from "react-icons/fa"
import { IoMdContact } from "react-icons/io"
import group34 from "../Assets/Group34.png"
import {AiFillFacebook, AiFillInstagram} from "react-icons/ai"
// import {AiOutlineInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"


const Page_5 = () => {
    return (
        <div className='Main_5'>
            <div className='horizontal_bar'>
                <hr className='firstHR' /><p style={{ fontSize: "21px", fontWeight: "600", position: "relative", bottom: "2470px", left: "45px" }}>Read about our blogs for more  <br />
                    information on our processes </p><hr className='secondHR' /><p style={{ fontSize: "21px", fontWeight: "600", position: "relative", bottom: "2578px", left: "665px" }}>Get to know the whole us and <br /> more of our services</p>
            </div>
            <div className='cast_Main'>
                <div className='cast_Classes' id="Icons-1">
                    <div className='cast_Icon' id='Icons' ><FaRssSquare id='FaRssSquare' /></div><p style={{ fontSize: "21px", fontWeight: "600", position: "relative", left: "120px", bottom: "100px" }}> How to start a company <br />
                        formation in Dubai </p><p id='min' style={{ position: "relative", left: "120px", bottom: "125px" }}>5 Minutes</p>
                </div>
                <div className='cast_Classes' id='Icons-2'>
                    <div className='cast_Icon' id='Icons' ><FaRssSquare id='FaRssSquare' /></div><p style={{ fontSize: "21px", fontWeight: "600", position: "relative", left: "120px", bottom: "100px" }}>How to start an Offshore <br />
                        company formation in Dubai</p><p style={{ position: "relative", color: "#525ded", left: "120px", bottom: "125px" }}>5 Minutes</p>
                </div>
                <div className='cast_Classes' id='Icons-3'>
                    <div className='cast_Icon' id='Icons'><FaRssSquare id='FaRssSquare' /></div><p style={{ fontSize: "21px", fontWeight: "600", position: "relative", left: "120px", bottom: "100px" }}> SEO Dubai: Who benefits  <br />
                        the most?</p><p style={{ position: "relative", color: "#525ded", left: "120px", bottom: "125px" }}>5 Minutes</p>
                </div>
            </div>
            <div className='third_Hr_Line'>
            <hr className='thirdHR' />
            </div>
            <p style={{ fontSize: "21px", fontWeight: "bold", position: "relative", bottom: "2774px", left: "420px" }}>Satisfied We are When Our <br />Customers Are Happy</p>
            <div className='review_all_select'>
                <div className='reviews'>
                    <div className='contactIcon'>
                        <IoMdContact id="contactIcon" />
                        <hr style={{ width: "50px", height: "1.5px", backgroundColor: "#525ded", position: "relative", top: "65px" }} />
                    </div>
                    <p style={{ fontSize: "50px", position: "relative", left: "55px", bottom: "105px" }}>˝</p><p style={{ position: "relative", left: "75px", bottom: "205px", color: "gray" }}>
                        I am very happy with them. I’ll <br />
                        continue to use their services in <br />
                        future & highly recommend them <br />
                        to anyone.
                    </p>  <p style={{ fontSize: "50px", position: "relative", left: "155px", bottom: "285px" }}>˝</p>
                    <p style={{ fontSize: "20px", fontWeight: "bold", position: "relative", left: "75px", bottom: "363px", color: "gray" }}>Muhib Abrar</p>
                </div>
                <div className='reviews'>
                    <div className='contactIcon'>
                        <IoMdContact id="contactIcon" />
                        <hr style={{ width: "50px", height: "1.5px", backgroundColor: "#525ded", position: "relative", top: "65px" }} />
                    </div>
                    <p style={{ fontSize: "50px", position: "relative", left: "55px", bottom: "105px" }}>˝</p><p style={{ position: "relative", left: "75px", bottom: "205px", color: "gray" }}>
                        Rama has a high level of integrity, <br />
                        intellect, knowledge of his <br />
                        business, resourcefulness and <br />
                        humanity
                    </p>  <p style={{ fontSize: "50px", position: "relative", left: "155px", bottom: "285px" }}>˝</p>
                    <p style={{ fontSize: "20px", fontWeight: "bold", position: "relative", left: "75px", bottom: "363px", color: "gray" }}>Colin Saldahna</p>
                </div>
                <div className='reviews'>
                    <div className='contactIcon'>
                        <IoMdContact id="contactIcon" />
                        <hr style={{ width: "50px", height: "1.5px", backgroundColor: "#525ded", position: "relative", top: "65px" }} />
                    </div>
                    <p style={{ fontSize: "50px", position: "relative", left: "55px", bottom: "105px" }}>˝</p><p style={{ position: "relative", left: "75px", bottom: "205px", color: "gray" }}>
                        Your advise was so complete that I <br />
                        actually realized how beneficial <br />
                        this would be to my clients and my <br />
                        busines
                    </p>  <p style={{ fontSize: "50px", position: "relative", left: "155px", bottom: "285px" }}>˝</p>
                    <p style={{ fontSize: "20px", fontWeight: "bold", position: "relative", left: "75px", bottom: "363px", color: "gray" }}>Muhib Abrar</p>
                </div>
            </div>
           <div className='All_Services'>
           <div className='Services'>
                <b>Services</b>
                <p>Products</p>
                <p>Solutions</p>
                <p>Assurance</p>
                <p>FAQ</p>
                <p>Woring at Varat-Singhania</p>
            </div> <br />
            <div className='Services'>
                <b>Policies</b>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div> <br />
            <div className='Services'>
                <b>About</b>
                <p>About us</p>
                <p>Contact us</p>
            </div> <br />
            <div className='Services'>
                <b>Address</b>
                <p>608 One Lake Plaza, Cluster T, <br />
                    Al Sarayat Street, Jumeirah <br />
                    Lake Towers <br />
                    Dubai <br />
                    United Arab Emirates <br /> <br />
                    Office Hours: Sunday to <br />
                    Thursday 8:30 AM to 6:30 PM <br />
                    [GMT+4] <br />
                    M: +971 55 794 2016 <br />
                    O: +971 4 447 2061</p>
            </div> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className='Services'>
                <b>Subscribe Now</b>
                <p>Subscribe now to receive our <br />
                    Newsletters about amazing <br />
                    opportunities in Dubai</p>
            </div>
            <div className='input_Main'>
            <input className='email_input' type="email" name="" id="" placeholder='Enter email address' required style={{height:"40px",width:"250px",border:"none"}} /><img className='email_img' src={group34} alt="not-found-404" height={40} /> <br /><br />
            </div>
            <div className='All_AI'>
                <div><AiFillFacebook className='AI' /></div>
                <div><AiFillInstagram className='AI' /></div>
                <div><AiFillLinkedin className='AI' /></div>
                <div><AiFillYoutube className='AI' /></div>
            </div>
            <p className='ThankYou'> Varaluae 2021 © All Right Reserved
</p>
           </div>
        </div>
    )
}

export default Page_5