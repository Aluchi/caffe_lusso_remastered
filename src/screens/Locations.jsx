import React, { useState, useContext } from "react";
import LocationsAccordion from "../components/LocationsAccordion.jsx";
import MainContext from "../contexts/MainContext.jsx";
import { Helmet } from "react-helmet";

function Locations() {
  const { locations } = useContext(MainContext);
  const [currentMapSrc, setCurrentMapSrc] = useState(locations[0].mapSrc);

  const handleLocationSelect = (mapSrc) => {
    setCurrentMapSrc(mapSrc);
  };

  return (
    <main className="wrapper">
      <Helmet>
        <title>Locations | Caffé Lusso</title>
      </Helmet>
      <section className="grid grid-cols-1 gap-20 lg:grid-cols-2 py-28 px-5">
        <div className="">
          <h2 className="text-4xl text-center font-bold tracking-wider mb-8 lg:text-left">
            YOU CAN FIND US IN
          </h2>
          <LocationsAccordion onLocationSelect={handleLocationSelect} />
        </div>
        <iframe
          src={currentMapSrc}
          className="w-full h-96"
          loading="lazy"
        ></iframe>
      </section>
      <h4 className="text-sm text-center pb-5 italic">
        This is just a friendly reminder: none of these locations are real.
      </h4>
    </main>
  );
}

export default Locations;
