import React from 'react'
import { connect } from "react-redux";
import { useLocation } from 'react-router';
import { toggleDownloads, toggleFriendlist } from '../../actions/layoutActions'
import Downloads from './Downloads'
import Friendlist from './Friendlist';
import './Sidecontent.css'

const Sidecontent = ({ displayFriendlist, displayDownloads, toggleDownloads, toggleFriendlist, children }) => {

    const { pathname } = useLocation();

    const closeDownloads = () => toggleDownloads(false);
    const closeFriends = () => toggleFriendlist(false);

    return (
        <div className="sidecontent">
            { (displayDownloads) && <span className="shadow" onClick={closeDownloads}></span> }
            { (displayFriendlist && pathname !== '/') && <span className="shadow" onClick={closeFriends}></span> }
            { displayDownloads && <Downloads /> }
            {children}
            { displayFriendlist && <Friendlist />}
        </div>
    )
}

const mapStateToProps = (state) => ({
    displayFriendlist: state.layout.displayFriendlist,
    displayDownloads: state.layout.displayDownloads
});

export default connect(mapStateToProps, { toggleDownloads, toggleFriendlist })(Sidecontent)
