import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Games.module.css'

const Games = () => {
    return (
        <div className={styles.library}>
            <Link to="/store" className={styles.shop}>
                <span className={styles.iconStore}>
                </span>
                Shop Games &amp; Mods
            </Link>
        </div>
    )
}

export default Games
