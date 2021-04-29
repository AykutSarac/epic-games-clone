import React from 'react'
import './StoreNavbar.css'
import friendsIcon from '../../assets/News/friends.png'
import { connect } from 'react-redux'
import { toggleFriendlist } from '../../actions/layoutActions'

const StoreNavbar = ({ toggleFriendlist, friends }) => {

    const onlineCount = friends.filter(u => u.status === 'online').length;

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
                    <span className="icon" style={{ backgroundImage: `url(${friendsIcon})` }} onClick={toggleFriendlist}>{onlineCount}</span>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    friends: state.layout.friends
});

export default connect(mapStateToProps, { toggleFriendlist })(StoreNavbar)
