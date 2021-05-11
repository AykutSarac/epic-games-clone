import React from 'react'
import styles from './Downloads.module.css'

const Downloads = () => {

    return (
        <div className={styles.Downloads}>
            <div className={styles.Updates}>Updating<span style={{ color: 'white' }}>00</span> </div>
            <div>
                You have no tasks
            </div>
        </div>
    )
}

export default Downloads