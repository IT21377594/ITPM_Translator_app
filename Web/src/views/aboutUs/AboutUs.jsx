import React from 'react'
import Contactus from '../../assets/img/Contactus.png'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Contactus} alt="" />
            <div className="Webname">
                <h1>ZKC Media</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>

        <Contact />
    </div>
  )
}

function Contact() {
    return(
        <div className="a-right">
            <form className="infoForm authForm">

                <h3>Log In</h3>
                <div>
                    <input type="text" placeholder="Username" className="infoInput" name="username"/>
                </div>
                <div>
                    <input type="password" placeholder="Password" className="infoInput" name="password"/>
                </div>
                
                <div>
                    <span style={{fontSize: '12px'}}>Don't have an account Sign up</span>
                    <button className="button infoButton">Login</button>
                </div>
            </form>
        </div>
    )
}

export default AboutUs
