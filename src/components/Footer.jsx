import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";

function Footer() {
  const { navLinks } = useContext(MainContext);

  return (
    <footer className="main-footer py-8">
      <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        <section>
          <h2 className="text-lg font-bold">Caffé Lusso</h2>
          <p className="text-justify mt-2 text-sm">
            Elevating your coffee experience, one sip at a time. Enjoy our new
            exclusive selection of coffees and artisanal bakery.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold">Navigation</h2>
          <ul className="mt-4">
            {navLinks.map((link) => (
              <li key={link.href} className="list-none my-1.5">
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold">Contact us</h2>
          <div className="mt-4 flex space-x-4 text-lg">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
          <p className="mt-4 text-sm">
            +54 9 11 1234 5678 <br />
            info@caffelusso.com
          </p>
        </section>
      </div>
      <section className="mt-8 border-t border-gray-500 pt-4 text-center text-sm">
        <h3>&copy; 2025 Caffé Lusso. All rights reserved.</h3>
      </section>
    </footer>
  );
}

export default Footer;
