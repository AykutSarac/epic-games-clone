import React from 'react'
import './LibraryNavbar.css'
import friendsIcon from '../../assets/News/friends.png'
import { toggleFriendlist } from '../../actions/layoutActions'
import { connect } from 'react-redux';

const LibraryNavbar = ({ toggleFriendlist, friends }) => {

    const onlineCount = friends.filter(u => u.status === 'online').length;

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
                    <span className="icon" style={{ backgroundImage: `url(${friendsIcon})` }} onClick={toggleFriendlist}>{onlineCount}</span>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    friends: state.layout.friends
});

export default connect(mapStateToProps, { toggleFriendlist })(LibraryNavbar)
