import React from 'react'
import styles from './Incompatible.module.css'

const Incompatible = () => {
    return (
        <div className={styles.error}>
            <p>This app is not compatible with your device</p>
            <a href="https://github.com/AykutSarac/epic-games-clone">Go back to GitHub</a>
        </div>
    )
}

export default Incompatible
