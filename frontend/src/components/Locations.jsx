import React, { useState } from "react";
import { Globe, MapPin } from "lucide-react";

const locations = [
  {
    name: "Россия",
    cities: ["Москва"],
    ping: "5-60мс",
  },
   {
     name: "Европа",
     cities: ["Франкфурт, Варшава"],
     ping: "10-90мс",
   },
   {
     name: "Северная Америка",
     cities: ["Оттава"],
     ping: "20-200мс",
   },  
  // {
  //   name: "Asia Pacific",
  //   cities: ["Tokyo", "Singapore", "Sydney"],
  //   ping: "25-50ms",
  // },
];

const Locations = () => {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <div className="relative bg-transparent overflow-hidden">
      <div className="relative max-w-screen-2xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-900/20 rounded-full mb-8">
            <Globe className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-purple-400 font-medium">Наша сеть</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Наши локации
          </h2>

          <p className="mt-3 max-w-md mx-auto text-gray-300 text-xl md:text-2xl font-medium md:max-w-3xl">
            Мы стараемся размещать наши узлы в разных локациях мира для минимальных задержек
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`
                group bg-gray-900/50 backdrop-blur-sm rounded-xl p-8
                border transition-all duration-300 hover:scale-[1.02] cursor-pointer
                ${activeLocation === location.name ? "border-purple-900/50 bg-gray-800/50" : "border-gray-800"}
                hover:border-purple-900/50
              `}
              onClick={() => setActiveLocation(location.name)}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gray-800/50 group-hover:bg-purple-900/20 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white ml-4">
                  {location.name}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 group-hover:bg-gray-800/70 transition-colors duration-300">
                  <p className="text-sm font-medium text-gray-300">
                    Города: {location.cities.join(", ")}
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 group-hover:bg-gray-800/70 transition-colors duration-300">
                  <p className="text-sm font-medium text-gray-300">
                    Средний пинг: {location.ping}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
