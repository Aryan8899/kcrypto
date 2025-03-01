// Metrics.tsx - Responsive Improvements
"use client";

import { useEffect, useState } from "react";

const metricsData = [
  { value: "$17.3M+", label: "TVL" },
  { value: "$594.8M", label: "Volume" },
  { value: "708.3K", label: "On-chain Transactions" },
  { value: "$14.2M", label: "Fees Generated" },
  { value: "10", label: "Supported Chains" },
  { value: "8", label: "Supported DEXs" },
];

const chains = [
  { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
  { name: "Optimism", logo: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png?v=040" },
  { name: "BNB", logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png" },
  { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.png" },
  { name: "Unichain", logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png" },
  { name: "Polygon", logo: "https://cryptologos.cc/logos/polygon-matic-logo.png" },
  { name: "Sonic", logo: "https://img.icons8.com/?size=100&id=hyyyREO4gnSD&format=png&color=000000" },
  { name: "Base", logo: "https://cdn.brandfetch.io/id6XsSOVVS/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Arbitrum", logo: "https://cryptologos.cc/logos/arbitrum-arb-logo.png" },
  { name: "Avalanche", logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png" },
];

const dexes = [
  { name: "Raydium Concentrated", logo: "https://cryptologos.cc/logos/raydium-ray-logo.png" },
  { name: "Raydium Standard", logo: "https://cryptologos.cc/logos/raydium-ray-logo.png" },
  { name: "Uniswap", logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png" },
  { name: "PancakeSwap", logo: "https://cryptologos.cc/logos/pancakeswap-cake-logo.png" },
  { name: "Trader Joe", logo: "./image/trader-joes-seeklogo.png" },
  { name: "SushiSwap", logo: "https://cryptologos.cc/logos/sushiswap-sushi-logo.png" },
  { name: "QuickSwap", logo: "./image/quickswap-logo.png" },
  { name: "QuickSwap Gamma", logo: "./image/quickswap-logo.png" },
  { name: "Camelot", logo: "/image/camelot.png" },
  { name: "THENA", logo: "/image/Thena.png" },
];

export default function Metrics() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev <= -100 ? 0 : prev - 1));
    }, 30); // Speed of scrolling

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0b0f19] py-8 sm:py-10 px-4 sm:px-8">
      {/* Static Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
        {metricsData.map((metric, index) => (
          <div
            key={index}
            className="relative bg-[#141A26] p-4 sm:p-6 rounded-xl border border-gray-700 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FFA3] to-transparent opacity-10 rounded-xl"></div>
            <h3 className="text-xl sm:text-3xl font-bold text-[#00FFA3]">{metric.value}</h3>
            <p className="text-gray-300 text-sm">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Static Chains */}
      <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
        {chains.map((chain, index) => (
          <div key={index} className="flex items-center space-x-2 text-white">
            <img src={chain.logo} alt={chain.name} className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs sm:text-sm">{chain.name}</span>
          </div>
        ))}
      </div>

      {/* Marquee Scrolling DEXs */}
      <div className="mt-8 sm:mt-10 overflow-hidden">
        <div
          className="flex space-x-6 sm:space-x-10 animate-scroll"
          style={{ transform: `translateX(${position}px)`, whiteSpace: "nowrap" }}
        >
          {dexes.map((dex, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <img src={dex.logo} alt={dex.name} className="w-6 h-6 sm:w-8 sm:h-8" />
              <p className="text-white text-xs sm:text-sm">{dex.name}</p>
              <span className="text-[#00FFA3] text-xs sm:text-sm">● Live</span>
            </div>
          ))}
          {dexes.map((dex, index) => ( // Duplicate for seamless scrolling
            <div key={`dup-${index}`} className="flex flex-col items-center space-y-2">
              <img src={dex.logo} alt={dex.name} className="w-6 h-6 sm:w-8 sm:h-8" />
              <p className="text-white text-xs sm:text-sm">{dex.name}</p>
              <span className="text-[#00FFA3] text-xs sm:text-sm">● Live</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}