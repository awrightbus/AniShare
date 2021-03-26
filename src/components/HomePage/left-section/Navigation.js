import React from 'react'
import './Navigation.css'
import {Link} from 'react-router-dom';

function Navigation() {
    return (
       
            <nav className='navigation'>
                <ul className='nav-items'>
               <Link to="/" className='nav-item current'><li >Home</li></Link> 
                <Link className='nav-item current' to='/about'><li >About</li></Link>
                <Link className='nav-item current' to='/all-reviews'><li >All Reviews</li></Link>
                {/* <Link to='/add-review' className='nav-item current'> <li >Add Review</li></Link> */}
                </ul>
            </nav>
        
    )
}

export default Navigation
