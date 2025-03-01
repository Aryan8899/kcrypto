// KrystalWallet.tsx - Responsive Improvements
"use client";

export default function KrystalWallet() {
  return (
    <section className="bg-[#0b0f19] py-8 sm:py-16 px-4 sm:px-8">
      {/* Section Title */}
      <h2 className="text-center text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">
        <span className="text-[#00FFA3]">[Krystal</span> Wallet]
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-12">
        {/* Wallet Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://krystal.app/assets/images/home/mobile-app.webp"
            alt="Krystal Wallet"
            className="w-full max-w-[300px] sm:max-w-[450px] h-auto"
          />
        </div>

        {/* Wallet Information */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h3 className="text-white text-xl sm:text-2xl font-semibold">
            The only Mobile Wallet for Liquidity Farming
          </h3>
          <p className="text-gray-300 mt-4 text-sm sm:text-base">
            Download and install Krystal Wallet to easily access DeFi and
            manage your liquidity, anytime and anywhere.
          </p>

          {/* Download Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start sm:space-x-4 space-y-3 sm:space-y-0">
            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="block sm:inline-block"
            >
              <img
                src="https://developer.android.com/images/brand/en_generic_rgb_wo_60.png"
                alt="Google Play"
                className="w-[150px] h-auto cursor-pointer mx-auto sm:mx-0"
              />
            </a>

            {/* App Store */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="block sm:inline-block"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-[150px] h-auto cursor-pointer mx-auto sm:mx-0"
              />
            </a>

            {/* Android APK */}
            <a
              href="https://krystal.app/android-apk"
              target="_blank"
              rel="noopener noreferrer"
              className="block sm:inline-block"
            >
              <img
                src="./image/Apk.png"
                alt="Download APK"
                className="w-[150px] h-auto cursor-pointer mx-auto sm:mx-0"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}