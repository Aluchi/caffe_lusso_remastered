import React, { createContext } from "react";
import { menu } from "../data/menu";

export const MainContext = createContext();

export function MainContextProvider(props) {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Menu",
      href: "/menu",
    },
    {
      name: "Locations",
      href: "/locations",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const sectionMenuProds = Object.fromEntries(
    Object.entries(menu).map(([section, products]) => [
      section,
      products.map((product) => ({
        ...product,
        priceWithDiscount: product.discount
          ? product.price * (1 - product.discountPercentage)
          : null,
      })),
    ])
  );

  const menuProducts = Object.values(sectionMenuProds).flat();

  const recommendedProds = menuProducts.filter(
    (product) => product.recommended
  );

  const disccountsMenu = menuProducts.filter((product) => product.discount);

  const locations = [
    {
      city: "New York",
      content: "123 Main St, New York, NY",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4730.273262394602!2d-74.00805972477222!3d40.712867671111724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e1!3m2!1ses-419!2sar!4v1737327540219!5m2!1ses-419!2sar",
    },
    {
      city: "Washington D.C.",
      content: "456 Capitol Ave, Washington, D.C.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.021334590653!2d-77.03687068447734!3d38.90719227957021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7b112345678%3A0x9876cba123456789!2sWashington%20D.C.%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1737327540220!5m2!1ses-419!2sar",
    },
    {
      city: "Chicago",
      content: "789 Michigan Ave, Chicago, IL",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4887.355123456789!2d-87.629798764!3d41.8781143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6543213456789%3A0x12345abcde67890!2sChicago%2C%20IL%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1737327540221!5m2!1ses-419!2sar",
    },
    {
      city: "Houston",
      content: "1011 Bayou St, Houston, TX",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54321.54321098765!2d-95.369802!3d29.7604267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12345abcd67890%3A0x987654321abcde!2sHouston%2C%20TX%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1737327540222!5m2!1ses-419!2sar",
    },
  ];

  return (
    <MainContext.Provider
      value={{
        navLinks,
        recommendedProds,
        disccountsMenu,
        sectionMenuProds,
        locations,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

export default MainContext;
