import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import './LeftSection.css'

function LeftSection() {
    return (
        <div className='left-section'>
            <Logo/>
            <Navigation />
        </div>
    )
}

export default LeftSection
