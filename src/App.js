import NftMarketplaceHome from "./Component/marketPlaceHome/NftMarketplaceHome";
import WalletModal from "./Component/Modal";
import Card from "./Component/EconomySection";
import Footer from "./Component/footer/Footer";
import Artwork from "./Component/ArtWorkSection/Artwork";
const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NftMarketplaceHome />
      <Artwork />
      <Card />
      {/* <WalletModal /> */}
      <Footer />
    </div>
  );
};

export default App;
