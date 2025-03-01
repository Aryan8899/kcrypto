import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Features from "./components/Features";
import KrystalWallet from "./components/KrystalWallet";
import InvestorsPartners from "./components/InvestorsPartners";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="bg-[#0b0f19] min-h-screen text-white">
      <Navbar />
      <Hero />
      <Metrics />
      <Features/>
      <KrystalWallet />
      <InvestorsPartners />
      <Footer/>
    </div>
  );
}
