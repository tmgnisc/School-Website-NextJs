import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-[#FF1493] text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Text Content */}
        <div className="md:w-1/2 px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pragati School</h2>
          <p className="text-lg mb-6 leading-relaxed">
          Dynamism, Dimensional, Spiritualism 
          </p>
          <p className="text-lg mb-6 leading-relaxed">
          Pragati Secondary School, founded and run under Pragati Education Foundation, is a co-educational private school located in Batulechour -16 Pokhara. Motivated by the zeal of the local academic enthusiasts who accentuated on the need to establish an English Medium school in the very locality, Pragati was founded in 2047 B.S. (1999 A.D) by Mr. Basanta Baniya, a local resident. Back then, the main objective behind its establishment was to stop a much strenuous exodus of the local students flocking into the main city center for better education. 
          </p>
          <button className="bg-white-600 hover:bg-red-700 text-white py-2 px-6 rounded-full">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 px-6 md:px-12 mt-8 md:mt-0">
          <Image
            src="/about.jpg" // Replace with the actual image path
            alt="about img"
            width={720}
            height={540}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
