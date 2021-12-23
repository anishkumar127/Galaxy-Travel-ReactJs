import React from 'react';
import './FooterStyles.css';
import {FaFacebook,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter} from 'react-icons/fa'
const Footer = () =>{
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>
            <div>
                <p> 123 Acme St.</p>
                <h4>Houston, Tx</h4>
            </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>+91 9649275150</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>anishbishnoi@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,</p>
                    <div className="social">
                        <FaFacebook size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                        <FaTwitter size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                        <FaLinkedin size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>

                    </div>
                </div>
            </div>


        </div>
    )
}
export default Footer;