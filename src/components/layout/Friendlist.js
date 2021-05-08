import React, { useEffect, useState } from 'react'
import './Friendlist.css'
import { SEARCH } from '../../assets'
import bellIcon from '../../assets/News/bell.png'
import settingsIcon from '../../assets/Sidebar/gear.svg'
import { useLocation } from 'react-router'
import FriendlistUsers from './FriendlistUsers'

const Friendlist = () => {

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

                    { toggle ? <FriendlistUsers setCurrent={setCurrent} style={style} search={search} /> : null }

                </div>

                <div className="connect">
                    <p><a href="#!">Connect your social account</a> to find friends on EpicGames!</p>
                </div>
            </div>

            { current &&
                <div className="showCurrent">
                    <div className="icons">
                        <span className="icon-more">...</span>
                        <span className="icon-close" onClick={() => onCurrent(null)}>&times;</span>
                    </div>
                    <span className={`icon ${current.status}`} style={{ background: current.color }}>{current.username[0].toUpperCase()}</span>
                    <div className="userinfo">
                        <p>{current.username}</p>
                        <p>{current.status}</p>
                    </div>
                </div>
            }

        </div>
    )
}

export default Friendlist
