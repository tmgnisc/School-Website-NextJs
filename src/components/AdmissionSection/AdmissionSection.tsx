import React from "react";

const AdmissionSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Admission <br />
            Open
          </h2>
          <p className="text-lg text-red-600 font-semibold">From</p>
          <p className="text-xl md:text-2xl text-[#1A3D7C] font-semibold mb-4">
            Kindergarten to Grade XI
          </p>
          <button className="bg-[#FF1493] text-white py-2 px-6 rounded-full transition duration-300 hover:bg-[#e01380]">
            Apply Now
          </button>
        </div>

        <div className="md:w-1/2 px-6 grid grid-cols-2 gap-4 mt-8 md:mt-0">
          <img
            src="https://via.placeholder.com/200x150"
            alt="Placeholder 1"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/200x150"
            alt="Placeholder 2"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/200x150"
            alt="Placeholder 3"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/200x150"
            alt="Placeholder 4"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
