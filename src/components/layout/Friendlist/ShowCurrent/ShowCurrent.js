import React from 'react'
import styles from './ShowCurrent.module.css'

const showCurrent = ({ current, setCurrent }) => {

    const onCurrent = (user) => setCurrent(user);


    return (
        <div className={styles.showCurrent}>
            <div className={styles.icons}>
                <span>...</span>
                <span className={styles.iconClose} onClick={() => onCurrent(null)}>&times;</span>
            </div>
            <span className={`${styles.icon} ${styles[current.status]}`} style={{ background: current.color }}>{current.username[0].toUpperCase()}</span>
            <div className={styles.userinfo}>
                <p>{current.username}</p>
                <p>{current.status}</p>
            </div>
        </div>
    )
}

export default showCurrent
