"use client";

import testimonials from "@/utils/testimonials";
import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-[#E8F1FF] py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-8 flex items-center justify-center">
          <span className="mr-2 border-b-4 border-red-500 w-8"></span> Parents
          Testimonials
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full md:w-1/2 lg:w-1/3 text-center"
            >
              <div className="flex justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 shadow-lg"
                />
              </div>

              <p className="text-gray-700 italic leading-relaxed mb-4">
                "{testimonial.feedback}"
              </p>

              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.relation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
