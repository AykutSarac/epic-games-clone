import React from 'react'
import './LibraryNavbar.css'
import friends from '../../assets/News/friends.png'
import { toggleFriendlist } from '../../actions/layoutActions'
import { connect } from 'react-redux';

const LibraryNavbar = ({ toggleFriendlist }) => {
    return (
        <nav className="libraryNavbar">
            <ul className="primary-nav">
                <li>
                    <label>Sort by:</label>
                    <select disabled>
                        <option value="recent">Recent</option>
                    </select>
                </li>
                <li>
                    <label>Filter:</label>
                    <select disabled>
                        <option value="recent">All</option>
                    </select>
                </li>
            </ul>

            <ul className="secondary-nav">
                <li>
                    <input type="search" placeholder="Search" />
                </li>
                <li>
                    <span className="icon" style={{ backgroundImage: `url(${friends})` }} onClick={toggleFriendlist}>1</span>
                </li>
            </ul>
        </nav>
    )
}

export default connect(null, { toggleFriendlist })(LibraryNavbar)
