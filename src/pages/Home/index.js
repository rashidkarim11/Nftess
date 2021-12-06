import React from 'react'
import NftMarketplaceHome from "../../Component/marketPlaceHome/NftMarketplaceHome";
import Artwork from "../../Component/ArtWorkSection/Artwork";
import Card from "../../Component/NftCard/NftCard" ;
import EconomySection from "../../Component/EconomySection"
const Home = () => {
    return (
        <>
            <NftMarketplaceHome/>
            <Artwork />
            <Card />
            <EconomySection/>
        </>
    )
}

export default Home
