import React, { useState } from 'react'
import './Friendlist.css'
import { SEARCH } from '../../assets'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'

const Friendlist = ({ friends, user }) => {

    const history = useHistory();
    const style = history.location.pathname === '/' ? 0 : 1;
    const styles = [
        { height: '90vh', top: '3em' },
        { height: '80vh', top: '7em'}
    ]

    const [search, setSearch] = useState('');
    const [toggle, setToggle] = useState(true);

    const onToggle = () => setToggle(!toggle);
    const onChange = (e) => setSearch(e.target.value);

    const sortList = (a, b) => {
        if (a.status === 'online') {
            return 1
        } else {
            return -1
        }
    }

    return (
        <div className="friendlist" style={styles[style]}>
            <div className="menu">
                <div className="icons">
                    <span className="icon icon-notification"></span>
                    <span className="icon icon-settings"></span>
                </div>
                <div className="toggle-menu">
                    <input type="radio" name="type" id="friends" onChange={onToggle} checked={toggle} />
                    <label htmlFor="friends">Friends</label>
                    <input type="radio" name="type" id="requests" onChange={onToggle} checked={!toggle} />
                    <label htmlFor="requests">Requests</label>
                </div>
                <div className="search">
                    <input type="search" placeholder="Search or add players" onChange={onChange} />
                    <span className="search-btn" style={{ backgroundImage: `url(${SEARCH})` }}></span>
                </div>
            </div>

            <div className="userlistwrapper">
                <div className="userlist" style={style === 0 ? {height: '65vh'} : {height: '55vh'}}>
                    <p>Online {`(${friends.filter(user => user.status === 'online').length + 1})`}</p>
                    <ul>
                        <li>
                            <span className="icon online" style={{backgroundColor: user.color}}>{user.username[0]}</span>
                            {user.username} <span className="you">YOU</span>
                            <span className="status">{user.status[0].toUpperCase() + user.status.slice(1)}</span>
                        </li>
                        {friends.filter(user => user.status === 'online').map((user, index) => (
                            <li key={index}>
                                <span className={`icon ${user.status}`} style={{ background: user.color }}>{user.username[0]}</span>
                                {user.username}
                                <span className="status">{user.status[0].toUpperCase() + user.status.slice(1)}</span>
                            </li>
                        ))}
                    </ul>
                    <p>Friends</p>
                    <ul>
                        {friends.filter(user => !user.you && user.username.toLowerCase().includes(search.toLowerCase())).sort(sortList).map((user, index) => (
                            <li key={index}>
                                <span className={`icon ${user.status}`} style={{ background: user.color }}>{user.username[0].toUpperCase()}</span>
                                {user.username}
                                <span className="status">{user.status[0].toUpperCase() + user.status.slice(1)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="connect">
                <a href="!#">Connect your social account</a> to find friends on Epic<br />Games!
                </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    friends: state.layout.friends,
    user: state.layout.user
});

export default connect(mapStateToProps, null)(Friendlist)
