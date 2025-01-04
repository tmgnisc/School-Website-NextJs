import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="bg-[#FF1493] text-white py-8">
      <div className="container mx-auto flex justify-center items-center space-x-12">
        <div className="flex flex-col items-center">
          <Image
            src="/127.png"
            alt="Experience"
            width={72}
            height={56}
            className="mb-4"
          />
          <p className="text-lg font-semibold">EXPERIENCE</p>
        </div>

        <div className="h-16 w-[2px] bg-white"></div>

        <div className="flex flex-col items-center">
          <Image
            src="/37.png"
            alt="Learn"
            width={58}
            height={45}
            className="mb-4"
          />
          <p className="text-lg font-semibold">LEARN</p>
        </div>

        <div className="h-16 w-[2px] bg-white"></div>

        <div className="flex flex-col items-center">
          <Image
            src="/49.png"
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
