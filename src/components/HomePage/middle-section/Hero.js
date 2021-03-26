import React from 'react'
import HeroImage from '../../../asset/hero.png'
import './Hero.css'


function Hero() {
    return (
        <div className='hero-section'>
       
            <div class='hero-positoning'>
                <img className='hero' src={HeroImage} alt='tanjiro'/>
            
                <h4 className='hero-subheader'>Season 1 <span>2019</span></h4>
                <h1 className='hero-header'>Demon Slayer</h1>
                <br/>
                <p className='hero-description'>It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon.</p>
                <p className='hero-button'>Read more</p>
            </div>
           
        
           
        </div>
    )
}

export default Hero
