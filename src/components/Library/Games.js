import React from 'react'
import { Link } from 'react-router-dom'
import './Games.css'

const Games = () => {
    return (
        <div className="library">
            <Link to="/store" className="shop">
                <span className="icon-store">
                </span>
                Shop Games &amp; Mods
            </Link>
        </div>
    )
}

export default Games
