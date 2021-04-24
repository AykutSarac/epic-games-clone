import React, { Fragment } from 'react'
import Games from '../components/Library/Games'
import LibraryNavbar from '../components/Library/LibraryNavbar'

const Library = () => {
    return (
        <Fragment>
            <LibraryNavbar />
            <Games />
        </Fragment>
    )
}

export default Library
