import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel ut aut voluptatum cumque expedita, harum velit officia sequi. Minus recusandae optio cupiditate consectetur error dolor quas quibusdam corporis neque?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt=""/>
                <img src={assets.twitter_icon} alt=""/>
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get IN TUCH</h2>
            <ul>
                <li>+91-56352485</li>
                <li>contact@gmail.com</li>
                <li></li>
                <li></li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copy Right reserved 2026</p>
    </div>
  )
}

export default Footer
