import React from 'react'
import StoreSlider from '../components/Store/StoreSlider/StoreSlider'
import StoreNavbar from '../components/Store/StoreNavbar/StoreNavbar'
import StoreSales from '../components/Store/StoreSales/StoreSales'
import FreeGames from '../components/Store/FreeGames/FreeGames'

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
