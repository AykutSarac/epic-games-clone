import React, { Fragment } from 'react'
import StoreSlider from '../components/Store/StoreSlider'
import StoreNavbar from '../components/Store/StoreNavbar'
import StoreSales from '../components/Store/StoreSales'

const Store = () => {
    return (
        <Fragment>
            <StoreNavbar />
            <StoreSlider />
            <StoreSales />
        </Fragment>
    )
}

export default Store
