import React from 'react'
import friendsIcon from '../../../assets/News/friends.png'
import { toggleFriendlist } from '../../../actions/layoutActions'
import { connect } from 'react-redux';

import styles from './LibraryNavbar.module.css'


const LibraryNavbar = ({ toggleFriendlist, friends }) => {

    const onlineCount = friends.filter(u => u.status === 'online').length;

    return (
        <nav className={styles.libraryNavbar}>
            <ul className={styles.primaryNav}>
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

            <ul>
                <li>
                    <input type="search" placeholder="Search" />
                </li>
                <li>
                    <span className={styles.icon} style={{ backgroundImage: `url(${friendsIcon})` }} onClick={toggleFriendlist}>{onlineCount}</span>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    friends: state.layout.friends
});

export default connect(mapStateToProps, { toggleFriendlist })(LibraryNavbar)
