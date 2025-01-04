import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <section className="bg-[#FF1493] text-white py-8">
      <div className="container mx-auto flex justify-center items-center space-x-12">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/127.png" // Replace with the path to your first image
            alt="Experience"
            width={72}
            height={56}
            className="mb-4"
          />
          <p className="text-lg font-semibold">EXPERIENCE</p>
        </div>

        {/* Divider */}
        <div className="h-16 w-[2px] bg-white"></div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/37.png" // Replace with the path to your second image
            alt="Learn"
            width={58}
            height={45}
            className="mb-4"
          />
          <p className="text-lg font-semibold">LEARN</p>
        </div>

        {/* Divider */}
        <div className="h-16 w-[2px] bg-white"></div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/49.png" // Replace with the path to your third image
            alt="Transform"
            width={61}
            height={48}
            className="mb-4"
          />
          <p className="text-lg font-semibold">TRANSFORM</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
