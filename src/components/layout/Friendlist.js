import React, { useState, useEffect } from 'react'
import './Friendlist.css'
import { SEARCH } from '../../assets'

const Friendlist = () => {

    const [toggle, setToggle] = useState(true);
    const [friendlist, setFriendlist] = useState([
        { username: 'AykutSrch', status: 'online', you: true },
        { username: 'Shimekato', status: 'online' },
        { username: 'fulldoly1', status: 'offline' },
        { username: 'KDM_Bifors', status: 'offline' },
        { username: 'Fnatic_Flayra', status: 'offline' },
        { username: 'LapuLapu53', status: 'offline' }
    ]);

    const randomColor = () => ['darkviolet', 'orange', 'olive'][Math.floor(Math.random() * 3)];

    useEffect(() => {
        const interval = setInterval(() => {
            const index = Math.floor(Math.random() * friendlist.length);
            setFriendlist(friendlist.map((user, i) => {
                if (i === index && !user.you) return { ...user, status: user.status === 'online' ? 'offline' : 'online' }
                return user;
            }))
        }, 10000);
        return () => clearInterval(interval);
    });

    const onChange = () => {
        setToggle(!toggle);
    }

    return (
        <div className="friendlist-wrapper">
            <div className="friendlist">
                <div className="menu">
                    <div className="icons">
                        <span className="icon icon-notification"></span>
                        <span className="icon icon-settings"></span>
                    </div>
                    <div className="toggle-menu">
                        <input type="radio" name="type" id="friends" onChange={onChange} checked={toggle} />
                        <label htmlFor="friends">Friends</label>
                        <input type="radio" name="type" id="requests" onChange={onChange} checked={!toggle} />
                        <label htmlFor="requests">Requests</label>
                    </div>
                    <div className="search">
                        <input type="search" placeholder="Search or add players" />
                        <span className="search-btn" style={{ backgroundImage: `url(${SEARCH})` }}></span>
                    </div>
                </div>

                <div className="userlist">
                    <p>Online {`(${friendlist.filter(user => user.status === 'online').length})`}</p>
                    <ul className="online">
                        {friendlist.filter(user => user.status === 'online').map((user, index) => (
                            <li key={index}>
                                <span className={`icon ${user.status}`} style={{ background: randomColor() }}>{user.username[0]}</span>
                                {user.username} { user.you && <span className="you">YOU</span>}
                                <span className="status">{user.status}</span>
                            </li>
                        ))}
                    </ul>
                    <p>Friends</p>
                    <ul className="frinds">
                        {friendlist.map((user, index) => (
                            <li key={index}>
                                <span className={`icon ${user.status}`} style={{ background: randomColor() }}>{user.username[0].toUpperCase()}</span>
                                {user.username}
                                <span className="status">{user.status}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Friendlist
