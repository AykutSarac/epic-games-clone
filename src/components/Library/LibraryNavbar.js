import React from 'react'
import './LibraryNavbar.css'

const LibraryNavbar = () => {
    return (
        <nav className="libraryNavbar">
            <ul className="primary-nav">
                <li>
                    <label for="cars">Sort by:</label>
                    <select name="cars" id="cars" disabled>
                        <option value="recent">Recent</option>
                    </select>
                </li>
                <li>
                <label for="cars">Filter:</label>
                    <select name="cars" id="cars" disabled>
                        <option value="recent">All</option>
                    </select>
                </li>
            </ul>

            <ul className="secondary-nav">
                <li>
                    <input type="search" placeholder="Search" />
                </li>
            </ul>
        </nav>
    )
}

export default LibraryNavbar
