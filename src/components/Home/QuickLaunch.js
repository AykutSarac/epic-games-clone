import React from 'react'
import { FORTNITE } from '../../assets/'

const qlStyle = {
    position: 'sticky',
    top: '0px',
    backgroundColor: 'var(--bg-color1)',
    zIndex: '999'
}

const QuickLaunch = () => {
    return (
        <div className="quicklaunch" style={qlStyle}>
            <p>Quick Launch</p>
            <ul className="games">
                <li><img src={FORTNITE} alt="fortnite" /></li>
            </ul>
        </div>
    )
}

export default QuickLaunch
