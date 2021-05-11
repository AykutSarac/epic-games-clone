import React, { useEffect, useState } from 'react'
import { SEARCH } from '../../../assets'
import bellIcon from '../../../assets/News/bell.png'
import settingsIcon from '../../../assets/Sidebar/gear.svg'
import { useLocation } from 'react-router'
import FriendlistUsers from './FriendlistUsers/FriendlistUsers'
import { connect } from 'react-redux'
import { toggleFriendlist } from '../../../actions/layoutActions'

import styles from './Friendlist.module.css'
import ShowCurrent from './ShowCurrent/ShowCurrent'

const Friendlist = ({ toggleFriendlist }) => {

    const { pathname } = useLocation();

    // Define styles depending on route
    const height = [
        { height: '90vh', top: '3em' },
        { height: '80vh', top: '7em' }
    ]

    const [search, setSearch] = useState('');
    const [toggle, setToggle] = useState(true);
    const [current, setCurrent] = useState(null);
    const [style, setStyle] = useState(1);

    // Methods
    const onToggle = () => setToggle(!toggle);
    const onChange = (e) => setSearch(e.target.value);
    const clearSearch = () => setSearch('');


    useEffect(() => {
        if (pathname === '/') setStyle(0);
        return () => { setStyle(1); toggleFriendlist(false); }
    }, [pathname, toggleFriendlist]);

    return (
        <div className={styles.Friendlist} style={height[style]}>
            <div className={styles.wrap}>
                <div className={styles.upper}>

                    <div className={styles.menu}>
                        <div className={styles.icons}>
                            <span className={`${styles.icon} ${styles.iconBell}`} style={{ backgroundImage: `url(${bellIcon})` }}></span>
                            <img src={settingsIcon} className={styles.icon} alt="settings" />
                        </div>

                        <div className={styles.toggleMenu}>
                            <input type="radio" name="type" id="friends" onChange={onToggle} checked={toggle} />
                            <label htmlFor="friends">Friends</label>
                            <input type="radio" name="type" id="requests" onChange={onToggle} checked={!toggle} />
                            <label htmlFor="requests">Requests</label>
                        </div>

                        <div className={styles.search}>
                            <input className={styles.SearchInput} type="text" placeholder={toggle ? 'Search or add players' : 'Filter friend requests'} onChange={onChange} value={search} />
                            {search.length > 0 ? <button className={styles.clear} onClick={clearSearch}>CLEAR</button> : <span className={styles.searchBtn} style={{ backgroundImage: `url(${SEARCH})` }}></span>}
                        </div>
                    </div>

                    {toggle ? <FriendlistUsers setCurrent={setCurrent} style={style} search={search} /> : null}

                </div>

                <div className={styles.connect}>
                    <p><a href="#!">Connect your social account</a> to find friends on EpicGames!</p>
                </div>
            </div>

            { current && <ShowCurrent current={current} setCurrent={setCurrent} /> }

        </div>
    )
}

export default connect(null, { toggleFriendlist })(Friendlist)
