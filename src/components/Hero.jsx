import React from "react";

function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          LeadIntel: Empowering Data-Driven Business Insights
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Discover, analyze, and leverage comprehensive company insights
          effortlessly. Gain in-depth data on companies, from profiles to
          industry specifics, with just a domain lookup.
        </p>

        <div className="mt-12 text-left md:text-center">
          <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">🔍</span>
              <span>
                Instant Company Lookup: Gain detailed insights with a single
                query.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">📊</span>
              <span>
                Comprehensive Data: Access key company metrics, background, and
                contact info.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3">🛠</span>
              <span>
                Built with Modern Tech: Powered by React, Tailwind CSS, and
                Firebase for a seamless user experience.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
