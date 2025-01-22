import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MainContext } from "../contexts/MainContext";

function CardsSlider() {
  const { disccountsMenu } = useContext(MainContext);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <Carousel
          responsive={responsive}
          className="slider"
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          draggable={false}
          focusOnSelect={false}
          infinite={true}
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          itemClass="px-4 py-4"
        >
          {disccountsMenu.map((mp) => (
            <div key={mp.id} className="carousel-card">
              <img src={mp.img} alt={mp.name} className="carousel-item-image" />
              <div className="sale-badge">SALE</div>
              <div className="carousel-item-details">
                <h3 className="text-lg">{mp.name}</h3>
                <div className="flex gap-5">
                  {mp.price && (
                    <span>
                      <s>${mp.price.toFixed(2)}</s>
                    </span>
                  )}
                  {mp.priceWithDiscount && (
                    <span className="text-red-600 font-bold">
                      ${mp.priceWithDiscount.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CardsSlider;
