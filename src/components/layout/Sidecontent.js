import React, { Fragment } from 'react'
import Downloads from './Downloads'
import './Sidecontent.css'

const Sidecontent = ({ children, state, setState }) => {

    const onClick = () => setState({ ...state, isDownloadActive: false });

    return (
        <div className="sidecontent">
            { state.isDownloadActive && (
                <Fragment>
                    <Downloads />
                    <span className="shadow" onClick={onClick}></span>
                </Fragment>
            )}

            {children}
        </div>
    )
}

export default Sidecontent
