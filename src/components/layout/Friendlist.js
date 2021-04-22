import React, { useState } from 'react'
import './Friendlist.css'
import { SEARCH } from '../../assets'

const Friendlist = () => {

    const [toggle, setToggle] = useState(true);

    const onChange = () => {
        setToggle(!toggle);
    }

    return (
        <div className="friendlist-wrapper">
            <div className="friendlist">
                <div className="icons">
                    <span className="icon icon-notification"></span>
                    <span className="icon icon-settings"></span>
                </div>
                <div className="toggle-menu">
                    <input type="radio" name="type" id="friends" onChange={onChange} checked={!toggle} />
                    <label htmlFor="friends">Friends</label>
                    <input type="radio" name="type" id="requests" onChange={onChange} checked={toggle} />
                    <label htmlFor="requests">Requests</label>
                </div>
                <div className="search">
                    <input type="search" placeholder="Search or add players" />
                    <span className="search-btn" style={{backgroundImage: `url(${SEARCH})`}}></span>
                </div>
            </div>
        </div>
    )
}

export default Friendlist
