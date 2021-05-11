import React from 'react'
import friendsIcon from '../../../assets/News/friends.png'
import { connect } from 'react-redux'
import { toggleFriendlist } from '../../../actions/layoutActions'

import styles from './StoreNavbar.module.css'

const StoreNavbar = ({ toggleFriendlist, friends }) => {

    const onlineCount = friends.filter(u => u.status === 'online').length;

    return (
        <nav className={styles.storeNavbar}>
            <ul className={styles.primaryNav}>
                <li>Discover</li>
                <li>Browse</li>
            </ul>

            <ul>
                <li>Wishlist</li>
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

export default connect(mapStateToProps, { toggleFriendlist })(StoreNavbar)
