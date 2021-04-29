import React from 'react'
import './StoreNavbar.css'
import friends from '../../assets/News/friends.png'

const StoreNavbar = () => {
    return (
        <nav className="storeNavbar">
            <ul className="primary-nav">
                <li>Discover</li>
                <li>Browse</li>
            </ul>

            <ul className="secondary-nav">
                <li>Wishlist</li>
                <li>
                    <input type="search" placeholder="Search" />
                </li>
                <li>
                    <span className="icon" style={{ backgroundImage: `url(${friends})` }}>1</span>
                </li>
            </ul>
        </nav>
    )
}

export default StoreNavbar
