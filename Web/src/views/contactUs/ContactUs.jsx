import React, { useRef } from 'react';
import './ContactUs.css'
import Contactus from '../../assets/img/Contactus.png'
import Navbar from 'components/navbar'
import Footer from 'components/footer/Footer'

const ContactUs = () => {
    return (
    <div>
        <Navbar/>
        <div className="Contact">
            <div className="c-left">
                <img src={Contactus} alt="" />
            </div>
            <Contact />
        </div>
        <Footer/>
    </div>
  )
}

function Contact() {
    
    return(
        <div className="c-right">
            <form action="https://getform.io/f/fdb52fcc-bfbc-4bc1-a8e6-3bc17fa046c7" method='POST' className="infoForm contactForm">

                <h3>Contact Us</h3>
                <div className="Input">
                    <input type="text" placeholder="Enter your Name" className="infoInput" name="from_name"/>
                </div>
                <div className="Input">
                    <input type="email" placeholder="Enter your Email" className="infoInput" name="from_email"/>
                </div>
                <div className="Input">
                    {/* <input type="text-area" placeholder="Type your message" className="infoInput" name="message"/> */}
                    <textarea rows="3" cols="50" placeholder="Type your message" className="infoInput" name="message"></textarea>
                </div>
                
                <div className="Input">
                    <button className="button infoButton">Send</button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs

