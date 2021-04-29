import React, { Fragment } from 'react'
import { connect } from "react-redux";
import { toggleDownloads, toggleFriendlist } from '../../actions/layoutActions'
import Downloads from './Downloads'
import Friendlist from './Friendlist';
import './Sidecontent.css'

const Sidecontent = ({ displayFriendlist, displayDownloads, toggleDownloads, toggleFriendlist, children }) => {

    const onClose = () => {
        toggleDownloads(false);
    }

    return (
        <div className="sidecontent">
            { displayDownloads && (
                <Fragment>
                    <Downloads />
                    <span className="shadow" onClick={onClose}></span>
                </Fragment>
            )}

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
