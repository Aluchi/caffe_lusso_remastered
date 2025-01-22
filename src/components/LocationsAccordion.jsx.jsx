import React, { useState, useContext } from "react";
import MainContext from "../contexts/MainContext";

function LocationsAccordion({ onLocationSelect }) {
  const { locations } = useContext(MainContext);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    const isCurrentlyOpen = openIndex === index;
    setOpenIndex(isCurrentlyOpen ? null : index);

    if (!isCurrentlyOpen) {
      onLocationSelect(locations[index].mapSrc);
    }
  };

  return (
    <>
      {locations.map((location, index) => (
        <div key={location.city} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleSection(index)}
          >
            <h3>{location.city}</h3>
            <span>
              {openIndex === index ? (
                <i className="fa-solid fa-caret-up"></i>
              ) : (
                <i className="fa-solid fa-caret-down"></i>
              )}
            </span>
          </button>
          {openIndex === index && (
            <div
              className={`accordion-content ${
                openIndex === index ? "open" : ""
              }`}
            >
              <p>{location.content}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default LocationsAccordion;
