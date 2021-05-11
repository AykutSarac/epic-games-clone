import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './FriendlistUsers.module.css'

const FriendlistUsers = ({ friends, user, setCurrent, style, search }) => {

    const [onlineCount, setOnlineCount] = useState(0);

    useEffect(() => {
        const onlineCount = friends.filter(user => user.status === 'online').length + 1;
        setOnlineCount(onlineCount);
    }, [friends]);

    const onCurrent = (user) => setCurrent(user);
    const sortList = (a, b) => (a.status === 'online') ? 1 : -1;
   

    return (
        <div className={styles.userlistwrapper}>
            <div className={styles.userlist} style={style === 0 ? { height: '55vh' } : { height: '46vh' }}>
                <p>Online ({onlineCount})</p>

                <ul>
                    <li>
                        <span className={`${styles.icon} ${styles.online}`} style={{ backgroundColor: user.color }}>{user.username[0]}</span>
                        {user.username}
                        <span className={styles.you}>YOU</span>
                        <span className={styles.status}>{user.status[0].toUpperCase() + user.status.slice(1)}</span>
                    </li>
                    {friends.filter(user => user.status === 'online').map((user, index) => (
                        <li key={index} onClick={() => onCurrent(user)}>
                            <span className={`${styles.icon} ${styles[user.status]}`} style={{ background: user.color }}>{user.username[0]}</span>
                            {user.username}
                            <span className={styles.status}>{user.status[0].toUpperCase() + user.status.slice(1)}</span>
                        </li>
                    ))}
                </ul>
                
                <p>Friends</p>
                <ul>
                    {friends.filter(user => !user.you && user.username.toLowerCase().includes(search.toLowerCase())).sort(sortList).map((user, index) => (
                        <li key={index} onClick={() => onCurrent(user)}>
                            <span className={`${styles.icon} ${styles[user.status]}`} style={{ background: user.color }}>{user.username[0].toUpperCase()}</span>
                            {user.username}
                            <span className={styles.status}>{user.status[0].toUpperCase() + user.status.slice(1)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    friends: state.layout.friends,
    user: state.layout.user
});

export default connect(mapStateToProps, null)(FriendlistUsers)
