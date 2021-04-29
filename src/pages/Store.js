import React from 'react'
import StoreSlider from '../components/Store/StoreSlider'
import StoreNavbar from '../components/Store/StoreNavbar'
import StoreSales from '../components/Store/StoreSales'

const Store = () => {
    return (
        <div>
            <StoreNavbar />
            <StoreSlider />
            <StoreSales />
        </div>
    )
}

export default Store
