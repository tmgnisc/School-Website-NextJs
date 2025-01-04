import React from 'react';

const events = [
  {
    id: 1,
    title: "Inter-House Basketball League 2079",
    date: "16 September, 2022",
  },
  {
    id: 2,
    title: "Children's Day Celebration 2079",
    date: "15 September, 2022",
  },
  {
    id: 3,
    title: "ADMISSION OPEN FOR GRADE XI",
    date: "01 August, 2022",
  },
];

const EventsSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
    
        <div className="md:w-2/3 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-8 flex items-center">
            <span className="mr-2 border-b-4 border-red-500 w-8"></span> Events
          </h2>

          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-[#FF1493] text-white rounded-lg shadow-lg p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <p className="text-sm">{event.date}</p>
                </div>
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div className="md:w-1/3 px-6 mt-8 md:mt-0">
          <img
            src="https://via.placeholder.com/400x300" 
            alt="Event Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
