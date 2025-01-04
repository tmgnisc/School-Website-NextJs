import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      <div
        className="relative h-[400px] md:h-[600px] w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Learn Today, Lead Tomorrow
            </h1>
            <p className="mt-4 text-lg">
              Your journey to excellence starts here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
