import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { useLocation } from 'react-router';
import { toggleDownloads, toggleFriendlist } from '../../../actions/layoutActions'
import Downloads from '../Downloads/Downloads'
import Friendlist from '../Friendlist/Friendlist';
import styles from './Sidecontent.module.css'

const Sidecontent = ({ displayFriendlist, displayDownloads, toggleDownloads, toggleFriendlist, children }) => {

    const { pathname } = useLocation();

    const closeDownloads = () => toggleDownloads(false);
    const closeFriends = () => toggleFriendlist(false);

    useEffect(() => {
        if (displayFriendlist && pathname !== '/') {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'unset';
        }
    }, [displayFriendlist, pathname]);

    return (
        <div className={styles.Sidecontent}>
            { (displayDownloads) && <span className={styles.shadow} onClick={closeDownloads}></span>}
            { (displayFriendlist && pathname !== '/') && <span className={styles.shadow} onClick={closeFriends}></span>}
            { displayDownloads && <Downloads />}
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
