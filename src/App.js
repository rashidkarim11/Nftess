import NftMarketplaceHome from "./Component/marketPlaceHome/NftMarketplaceHome"
import WalletModal from "./Component/Modal";
import Card from "./Component/EconomySection"

const App = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <div><NftMarketplaceHome /></div>
      <div> <Card /></div>
     
      <WalletModal />
    </div>
  );
};

export default App;
