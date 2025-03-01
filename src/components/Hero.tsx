export default function Hero() {
    return (
      <section className="relative flex items-center justify-between px-4 sm:px-8 py-10 sm:py-20 bg-[#0b0f19] overflow-hidden min-h-[60vh] sm:min-h-[80vh]">
        {/* Background Video - Different positioning and blur for mobile vs desktop */}
        <div className="absolute top-0 left-0 w-full h-[90vh] overflow-hidden">
          {/* Mobile video (centered with blur) */}
          <div className="md:hidden w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover filter blur-sm"
            >
              <source src="https://krystal.app/assets/images/home/banner.webm" type="video/webm" />
            </video>
          </div>
          
          {/* Desktop video (offset to right, no blur) */}
          <div className="hidden md:block w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full"
              style={{ marginLeft: "20rem" }}
            >
              <source src="https://krystal.app/assets/images/home/banner.webm" type="video/webm" />
            </video>
          </div>
        </div>
    
        {/* Content Wrapper - Left (Text & Buttons) & Right (Image) */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-6xl mx-auto md:mx-0 md:mr-8">
          {/* Left Section: Text & Buttons */}
          <div className="text-center md:text-left max-w-xl md:ml-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-green-400">
              Liquidity Farming Agent
            </h2>
            <p className="text-gray-300 mt-2 sm:mt-4 text-sm sm:text-base px-4 md:px-0">
              Earn the highest yields across DEXs on both Solana and EVM chains.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 px-4 md:px-0">
              <button className="bg-[#00FFA3] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold w-full sm:w-auto">
                Launch App
              </button>
              <button className="bg-[#24272D] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold w-full sm:w-auto">
                View Docs
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }