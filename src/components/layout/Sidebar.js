import React from 'react'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'
import * as ICON from '../../assets'
import {ReactComponent as GearIcon} from '../../assets/Sidebar/gear.svg'
import {ReactComponent as ProfileIcon} from '../../assets/Sidebar/profile.svg'


const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar">
                <div className="brand">
                    <img src="./logo.png" width="36" alt="epic logo" />
                    <Link to="/">Epic Games</Link>
                </div>
                <nav>
                    <ul className="primary-nav">
                        <li><NavLink activeClassName="current" exact to="/"><img className="icon" src={ICON.HOME} height="20" width="20" alt="home" />Home</NavLink></li>
                        <li><NavLink activeClassName="current" to="/store"><span className="icon icon-store"></span>Store</NavLink></li>
                        <li><NavLink activeClassName="current" to="/library"><img className="icon" src={ICON.LIBRARY} height="20" width="20" alt="library" />Library</NavLink></li>
                        <li><NavLink activeClassName="current" to="/uengine"><img className="icon" src={ICON.UNREAL} height="20" width="20" alt="unreal engine" />Unreal Engine</NavLink></li>
                    </ul>
                    <ul className="secondary-nav">
                        <li><a href="#downloads"><img src={ICON.DOWNLOAD} className="icon" alt="download icon" />Downloads</a></li>
                        <li><a href="#settings"><GearIcon className="icon" />Settings</a></li>
                        <li><a href="#profile"><ProfileIcon className="icon" />AykutSrch</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
