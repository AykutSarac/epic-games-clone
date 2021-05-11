import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as ICON from '../../../assets'
import { ReactComponent as GearIcon } from '../../../assets/Sidebar/gear.svg'
import { ReactComponent as ProfileIcon } from '../../../assets/Sidebar/profile.svg'
import { toggleDownloads } from '../../../actions/layoutActions'
import { connect } from 'react-redux'

import styles from './Sidebar.module.css'


const Sidebar = ({ toggleDownloads, displayDownloads }) => {

    const onClose = () => displayDownloads && toggleDownloads(false);

    return (
        <div className={styles.sidebarWrapper}>
            <div className={styles.sidebar}>
                <div className={styles.brand}>
                    <img src={ICON.LOGO} width="36" alt="epic logo" />
                    <Link to="/">Epic Games</Link>
                </div>
                <nav>
                    <ul onClick={onClose}>
                        <li><NavLink activeClassName={styles.current} exact to="/"><img className={styles.icon} src={ICON.HOME} height="20" width="20" alt="home" />Home</NavLink></li>
                        <li><NavLink activeClassName={styles.current} to="/store"><span className={`${styles.icon} ${styles.iconStore}`}></span>Store</NavLink></li>
                        <li><NavLink activeClassName={styles.current} to="/library"><img className={styles.icon} src={ICON.LIBRARY} height="20" width="20" alt="library" />Library</NavLink></li>
                        <li><NavLink activeClassName={styles.current} to="/uengine"><img className={styles.icon} src={ICON.UNREAL} height="20" width="20" alt="unreal engine" />Unreal Engine</NavLink></li>
                    </ul>
                    <ul onClick={onClose}>
                        <li><a href="#downloads" onClick={toggleDownloads}><img src={ICON.DOWNLOAD} className={styles.icon} alt="download icon" />Downloads</a></li>
                        <li><a href="#settings"><GearIcon className={styles.icon} />Settings</a></li>
                        <li className={styles.profile}><a href="#profile"><ProfileIcon className={styles.icon} />AykutSrch</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    displayDownloads: state.layout.displayDownloads
});

export default connect(mapStateToProps, { toggleDownloads })(Sidebar)
