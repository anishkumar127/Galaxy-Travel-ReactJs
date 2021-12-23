import React from 'react'
import './TrainingStyles.css';
import {Link} from 'react-router-dom';
import Space from '../assets/human.jpg';
import moon from '../assets/human.jpg';
const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Thorough training is a necessity when traveling to space.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Space} className='img' alt=''/>
                    </div>
                    <div className='image-stack bottom'>
                        <img src={moon} className='img' alt=''/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Training
