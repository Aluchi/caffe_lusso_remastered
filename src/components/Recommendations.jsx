import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

function Recommendations() {
  const { recommendedProds } = useContext(MainContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-5">
      {recommendedProds.map((product) => (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <img
            src={product.img}
            alt={product.name}
            className="recommendations-card-img"
          />
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-2xl font-bold capitalize">{product.name}</h3>
            <p>{product.descr}</p>
            <div className="flex gap-5">
              <span>
                {product.discount ? (
                  <s>${product.price.toFixed(2)}</s>
                ) : (
                  `$${product.price.toFixed(2)}`
                )}
              </span>
              {product.priceWithDiscount && (
                <span className="text-red-600 font-bold">
                  ${product.priceWithDiscount.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default Recommendations;
