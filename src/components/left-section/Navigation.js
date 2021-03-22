import React from 'react'
import './Navigation.css'

function Navigation() {
    return (
        <nav className='navigation'>
            <ul className='nav-items'>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About</li>
                <li className='nav-item'>All Reviews</li>
                <li className='nav-item'>Add Review</li>
            </ul>
        </nav>
    )
}

export default Navigation
