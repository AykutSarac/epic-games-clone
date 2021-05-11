import React from 'react'
import { FORTNITE } from '../../../assets'

import styles from './QuickLaunch.module.css'

const QuickLaunch = () => {
    return (
        <div className={styles.quicklaunch}>
            <p>Quick Launch</p>
            <ul className={styles.games}>
                <li>
                    <img src={FORTNITE} alt="fortnite" />
                </li>
            </ul>
        </div>
    )
}

export default QuickLaunch
