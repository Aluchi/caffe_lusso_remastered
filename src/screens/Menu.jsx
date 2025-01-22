import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { Helmet } from "react-helmet";

function Menu() {
  const { sectionMenuProds } = useContext(MainContext);

  return (
    <main>
      <Helmet>
        <title>Menu | Caffé Lusso</title>
      </Helmet>
      <section className="wrapper py-28">
        <div className="menu-title">
          <h1>Our Menu</h1>
          <p>Take a look to our delicious menu!</p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 mx-5">
          {Object.entries(sectionMenuProds).map(([section, products]) => (
            <div key={section} className="menu-column">
              <h4>{section}</h4>
              {products.map((product) => (
                <div key={product.name} className="single-menu">
                  <img src={product.img} alt={product.name} />
                  <div className="menu-content">
                    <h5>{product.name}</h5>
                    <p>{product.descr}</p>
                    <div className="flex flex-col items-end">
                      <span className="price">
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
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Menu;
