// Features.tsx - Responsive Improvements
"use client";

// Define types for better TypeScript support
type Feature = {
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    title: "4-Digit APRs",
    description:
      "Seize early opportunities for unparalleled yields across chains and protocols.",
    image: "https://krystal.app/assets/images/home/Card-0.png",
  },
  {
    title: "Farming Insights",
    description:
      "Access top-tier tracking and in-depth analysis to make timely farming decisions.",
    image: "https://krystal.app/assets/images/home/Card-1.png",
  },
  {
    title: "Strategic Vaults",
    description:
      "Optimize returns with farms expertly managed by professionals and AI-powered agents.",
    image: "https://krystal.app/assets/images/home/Card-2.png",
  },
];

const aiFeatures: Feature[] = [
  {
    title: "Real-Time Monitoring",
    description:
      "Continuous market and liquidity flow monitoring to spot the best opportunities.",
    image: "https://krystal.app/assets/images/home/Card-4.png",
  },
  {
    title: "Tailored Analysis",
    description:
      "Personalized insights and real-time prompts tailored to your farming goals.",
    image: "https://krystal.app/assets/images/home/Card-5.png",
  },
];

const farmingExperience: string[] = [
  "Simulate your earnings before committing.",
  "Instantly zap into liquidity pools with any asset and readjust/reinvest with ease.",
  "Automate farming actions to save time and reduce fees.",
];

export default function Features() {
  return (
    <section className="bg-[#0b0f19] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      {/* Earn with Krystal */}
      <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10">
        <span className="text-[#00FFA3]">[Earn</span> with Krystal]
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-[#141A26] p-4 rounded-xl border border-gray-700 shadow-lg text-center flex flex-col items-center justify-end h-[200px] sm:h-[220px] md:h-[250px] lg:h-[300px] overflow-hidden"
            style={{
              backgroundImage: `url(${feature.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

            <div className="relative z-10 p-2 sm:p-3 md:p-4">
              <h3 className="text-[#00FFA3] font-bold text-sm sm:text-md md:text-lg mb-1 sm:mb-2">{`[${feature.title}]`}</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-tight sm:leading-normal">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* AI-Driven Empowerment */}
      <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-8 md:mb-10">
        <span className="text-[#00FFA3]">[AI-Driven</span> Empowerment]
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {aiFeatures.map((feature, index) => (
          <div
            key={index}
            className="relative bg-[#141A26] p-4 rounded-xl border border-gray-700 shadow-lg text-center flex flex-col items-center justify-end h-[200px] sm:h-[220px] md:h-[250px] lg:h-[300px] overflow-hidden"
            style={{
              backgroundImage: `url(${feature.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

            <div className="relative z-10 p-2 sm:p-3 md:p-4">
              <h3 className="text-[#00FFA3] font-bold text-sm sm:text-md md:text-lg mb-1 sm:mb-2">{`[${feature.title}]`}</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-tight sm:leading-normal">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Streamlined Farming Experience */}
      <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-8 md:mb-10">
        <span className="text-[#00FFA3]">[Streamlined</span> Farming Experience]
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto gap-6 md:gap-8">
        {/* Farming Experience List */}
        <div className="space-y-3 sm:space-y-4 w-full md:w-1/2 px-2 sm:px-4">
          {farmingExperience.map((text, index) => (
            <div
              key={index}
              className="flex items-start sm:items-center bg-[#141A26] text-white px-3 sm:px-4 md:px-6 py-3 rounded-lg border border-gray-700 shadow-lg"
            >
              <span className="text-[#00FFA3] text-lg sm:text-xl mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0">✔</span>
              <span className="text-xs sm:text-sm md:text-base">{text}</span>
            </div>
          ))}
        </div>

        {/* Farming Experience Image */}
        <div className="w-full md:w-1/2 flex justify-center px-2 sm:px-4 mt-4 md:mt-0">
          <img
            src="https://krystal.app/assets/images/home/farm-exp.png"
            alt="Farming Experience"
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}