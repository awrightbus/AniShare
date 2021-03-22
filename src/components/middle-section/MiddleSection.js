import React from 'react'
import Hero from './Hero'
import './MiddleSection.css'
import Recent from './Recent'

function MiddleSection() {
    return (
        <div className='middle-section'>
            <Hero/>
            <Recent/>
        </div>
    )
}

export default MiddleSection
