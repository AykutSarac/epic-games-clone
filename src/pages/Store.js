import React from 'react'
import StoreSlider from '../components/Store/StoreSlider'
import StoreNavbar from '../components/Store/StoreNavbar'
import StoreSales from '../components/Store/StoreSales'
import FreeGames from '../components/Store/FreeGames'

const Store = () => {
    return (
        <div>
            <StoreNavbar />
            <StoreSlider />
            <StoreSales />
            <FreeGames />
        </div>
    )
}

export default Store
