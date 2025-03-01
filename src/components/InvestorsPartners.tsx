"use client";

// Define types for better TypeScript support
type Partner = {
  name: string;
  logo: string;
  customClass?: string;
};

// Using reliable CDN sources for logos
const investors: Partner[] = [
  // First row (3 logos)
  { name: "Hashed", logo: "https://krystal.app/assets/images/investors/hashed.png" },
  { name: "Crypto.com Capital", logo: "https://krystal.app/assets/images/investors/crypto_capital.png" },
  { name: "Signum Capital", logo: "https://krystal.app/assets/images/investors/signum.png" },
  
  // Second row (7 logos)
  { name: "BlockTower", logo: "https://krystal.app/assets/images/investors/blocktower.png" },
  { name: "HyperChain", logo: "https://krystal.app/assets/images/investors/defi_alliance.png" },
  { name: "Arrington XRP Capital", logo: "https://krystal.app/assets/images/investors/blocktower.png" },
  { name: "LD Capital", logo: "https://krystal.app/assets/images/investors/hyperchain.png" },
  { name: "ArkStream Capital", logo: "https://krystal.app/assets/images/investors/arrington.png" },
  { name: "Coin98 Ventures", logo: "https://krystal.app/assets/images/investors/LD.png" },
  { name: "DeFi Alliance", logo: "https://krystal.app/assets/images/investors/coin98.png" },
];

// First row of partners
const partnersRow1: Partner[] = [
  { name: "Uniswap", logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png" },
  { name: "PancakeSwap", logo: "https://cryptologos.cc/logos/pancakeswap-cake-logo.png" },
  { name: "SushiSwap", logo: "https://cryptologos.cc/logos/sushiswap-sushi-logo.png" },
  { name: "QuickSwap", logo: "https://cdn.simpleicons.org/quickbooks/white" },
  { name: "Thena", logo: "./image/Thena.png" },
  { name: "Trader Joe", logo: "https://cdn.simpleicons.org/tradingview/white" },
  { name: "Thruster", logo: "https://cdn.simpleicons.org/thunderbird/white" },
  { name: "Raydium", logo: "https://cdn.simpleicons.org/raycast/white" },
  { name: "Kyber Network", logo: "https://cdn.simpleicons.org/keycdn/white" },
  { name: "Socket", logo: "https://cdn.simpleicons.org/socket.io/white" },
  { name: "Space ID", logo: "https://cdn.simpleicons.org/spacex/white" },
  { name: "One ID", logo: "https://cdn.simpleicons.org/1password/white" },
];

// Second row of partners
const partnersRow2: Partner[] = [
  { name: "Dexscreener", logo:"./image/dex-screener-seeklogo.png"},
  { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud/white" },
  { name: "Code4rena", logo: "https://cdn.simpleicons.org/codio/white" },
  { name: "TheGraph", logo: "https://cdn.simpleicons.org/graphql/white" },
  { name: "Camelot", logo: "./image/camelot.png" },
  { name: "Helius", logo: "https://cdn.simpleicons.org/helium/white" },
  { name: "Jito", logo: "https://cdn.simpleicons.org/gitea/white" },
  { name: "Blocknative", logo: "https://cdn.simpleicons.org/blockchain.com/white" },
  { name: "Web3Auth", logo: "https://cdn.simpleicons.org/web3.js/white" },
];

export default function InvestorsPartners() {
  return (
    <section className="bg-[#0b0f19] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      {/* Title */}
      <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
        <span className="text-[#00FFA3]">[Investors & Partners]</span>
      </h2>
      <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto">
        List of investors & partners that make Krystal tick. Together we build a better decentralized world.
      </p>

      {/* Investors Section */}
      <div className="max-w-6xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-2">
        {/* First row - 3 larger logos - improved mobile layout */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-8 sm:space-y-0 mb-8 sm:mb-12 lg:mb-20">
          {investors.slice(0, 3).map((investor, index) => (
            <div key={index} className="flex justify-center items-center w-full sm:w-auto p-2">
              <img 
                src={investor.logo} 
                alt={investor.name} 
                className={`${
                  index === 1 ? "w-36 sm:w-40 md:w-50 lg:w-56" : "w-28 sm:w-32 md:w-36 lg:w-40"
                } h-auto`} 
              />
            </div>
          ))}
        </div>
        
        {/* Second row - 7 smaller logos - improved responsive grid for small screens */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {investors.slice(3).map((investor, index) => (
            <div key={index} className="flex justify-center items-center p-1">
              <img 
                src={investor.logo} 
                alt={investor.name} 
                className="w-20 sm:w-20 md:w-24 lg:w-80 h-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section - Dark background with two rows */}
      <div className="mt-8 sm:mt-10 bg-[#141A26] py-6 sm:py-8 px-2 sm:px-4 rounded-xl border border-gray-700 shadow-lg overflow-hidden relative">
        {/* Row 1 of partners - improved consistency for small screens */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-12 gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
          {partnersRow1.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center mb-1 sm:mb-2">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className={`w-6 h-6 sm:w-8 sm:h-8 object-contain ${partner.customClass || ''}`} 
                />
              </div>
              <p className="text-white text-xs text-center overflow-hidden text-ellipsis w-full px-1 max-w-full">{partner.name}</p>
            </div>
          ))}
        </div>
        
        {/* Row 2 of partners - improved consistency for small screens */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-3 lg:gap-4">
          {partnersRow2.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center mb-1 sm:mb-2">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className={`w-6 h-6 sm:w-8 sm:h-8 object-contain ${partner.customClass || ''}`} 
                />
              </div>
              <p className="text-white text-xs text-center overflow-hidden text-ellipsis w-full px-1 max-w-full">{partner.name}</p>
            </div>
          ))}
        </div>
        
        {/* Green line at bottom */}
        <div className="absolute bottom-0 left-1/2 w-4/5 h-1 bg-[#00FFA3] transform -translate-x-1/2"></div>
      </div>
    </section>
  );
}