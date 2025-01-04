import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="bg-[#F8F9FF] py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 px-6 md:px-12">
          {/* Title with line */}
          <div className="flex items-center mb-4">
            <div className="border-b-4 border-blue-900 w-8 mr-2"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C]">
              Experience The Pragati Life
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our children, the Pragatians, live the life of a learner, an explorer, and a responsible student.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We provide the kids with a complete holistic learning experience to help them learn what they experience the day before and transform tomorrow.
          </p>

          {/* Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Content with Placeholder Stars */}
        <div className="md:w-1/2 px-6 md:px-12 mt-8 md:mt-0 relative">
          {/* Large Star */}
          <div className="absolute top-4 left-6">
            <img
              src="https://via.placeholder.com/200x200" // Placeholder image
              alt="Star 1"
              className="w-32 h-32"
            />
          </div>

          {/* Medium Star */}
          <div className="absolute top-40 left-48">
            <img
              src="https://via.placeholder.com/150x150" // Placeholder image
              alt="Star 2"
              className="w-24 h-24"
            />
          </div>

          {/* Small Star */}
          <div className="absolute top-72 left-20">
            <img
              src="https://via.placeholder.com/100x100" // Placeholder image
              alt="Star 3"
              className="w-16 h-16"
            />
          </div>

          {/* Placeholder Main Image */}
          <div className="relative z-10">
            <img
              src="https://via.placeholder.com/400x300" // Placeholder image
              alt="Main Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
