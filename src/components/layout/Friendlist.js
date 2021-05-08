import React, { useEffect, useState } from 'react'
import './Friendlist.css'
import { SEARCH } from '../../assets'
import { connect } from 'react-redux'
import bellIcon from '../../assets/News/bell.png'
import settingsIcon from '../../assets/Sidebar/gear.svg'
import { useLocation } from 'react-router'

const Friendlist = ({ friends, user }) => {

    const { pathname } = useLocation();

    // Define styles depending on route
    const styles = [
        { height: '90vh', top: '3em' },
        { height: '80vh', top: '7em' }
    ]

    const [search, setSearch] = useState('');
    const [toggle, setToggle] = useState(true);
    const [current, setCurrent] = useState(null);
    const [style, setStyle] = useState(1);

    // Methods
    const onToggle = () => setToggle(!toggle);
    const onCurrent = (user) => setCurrent(user);
    const onChange = (e) => setSearch(e.target.value);
    const clearSearch = () => setSearch('');

    // Sort friendlist from offline to online
    const sortList = (a, b) => (a.status === 'online') ? 1 : -1;


    useEffect(() => {
        // Change friendlist style on route
        if (pathname === '/') setStyle(0);
        return () => setStyle(1);
    }, [pathname]);

    return (
        <div className="friendlist" style={styles[style]}>
            <div className="wrap">
                <div className="upper">
                    <div className="menu">
                        <div className="icons">
                            <span className="icon icon-bell" style={{ backgroundImage: `url(${bellIcon})` }}></span>
                            <img src={settingsIcon} className="icon" alt="settings" />
                        </div>
                        <div className="toggle-menu">
                            <input type="radio" name="type" id="friends" onChange={onToggle} checked={toggle} />
                            <label htmlFor="friends">Friends</label>
                            <input type="radio" name="type" id="requests" onChange={onToggle} checked={!toggle} />
                            <label htmlFor="requests">Requests</label>
                        </div>
                        <div className="search">
                            <input className="searchinput" type="text" placeholder={toggle ? 'Search or add players' : 'Filter friend requests'} onChange={onChange} value={search} />
                            {search.length > 0 ? <button className="clear" onClick={clearSearch}>CLEAR</button> : <span className="search-btn" style={{ backgroundImage: `url(${SEARCH})` }}></span>}
                        </div>
                    </div>

                    {
                        toggle ? (
                            <div className="userlistwrapper">
                                <div className="userlist" style={style === 0 ? { height: '55vh' } : { height: '46vh' }}>
                                    <p>Online {`(${friends.filter(user => user.status === 'online').length + 1})`}</p>
                                    <ul>
                                        <li>
                                            <span className="icon online" style={{ backgroundColor: user.color }}>{user.username[0]}</span>
                                            {user.username} <span className="you">YOU</span>
                                            <span className="status">{user.status[0].toUpperCase() + user.status.slice(1)}</span>
                                        </li>
                                        {friends.filter(user => user.status === 'online').map((user, index) => (
                                            <li key={index} onClick={() => onCurrent(user)}>
                                                <span className={`icon ${user.status}`} style={{ background: user.color }}>{user.username[0]}</span>
                                                {user.username}
                                                <span className="status">{user.status[0].toUpperCase() + user.status.slice(1)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p>Friends</p>
                                    <ul>
                                        {friends.filter(user => !user.you && user.username.toLowerCase().includes(search.toLowerCase())).sort(sortList).map((user, index) => (
                                            <li key={index} onClick={() => onCurrent(user)}>
                                                <span className={`icon ${user.status}`} style={{ background: user.color }}>{user.username[0].toUpperCase()}</span>
                                                {user.username}
                                                <span className="status">{user.status[0].toUpperCase() + user.status.slice(1)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) :
                            null
                    }
                </div>

                <div className="connect">
                    <p>
                        <a href="#!">Connect your social account</a> to find friends on Epic
                Games!</p>
                </div>
            </div>

            { current &&
                <div className="showCurrent">
                    <div className="icons">
                        <span className="icon-more">...</span>
                        <span className="icon-close" onClick={() => onCurrent(null)}>&times;</span>
                    </div>
                    <span className={`icon ${current.status}`} style={{ background: user.color }}>{current.username[0].toUpperCase()}</span>
                    <div className="userinfo">
                        <p>{current.username}</p>
                        <p>{current.status}</p>
                    </div>
                </div>
            }

        </div>
    )
}

const mapStateToProps = (state) => ({
    friends: state.layout.friends,
    user: state.layout.user
});

export default connect(mapStateToProps, null)(Friendlist)
