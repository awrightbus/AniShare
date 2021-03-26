import React from 'react'
import CreatorFavorites from './CreatorFavorites'
import './RightSection.css'
import SearchBar from './SearchBar'

function RightSection() {
    return (
        <div className='right-section'>
            <SearchBar />
            <CreatorFavorites />
        </div>
    )
}

export default RightSection
