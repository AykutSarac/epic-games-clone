import React from 'react'
import './Sidecontent.css'

const Sidecontent = (props) => {
    return (
        <div className="sidecontent">
            {props.children}
        </div>
    )
}

export default Sidecontent
