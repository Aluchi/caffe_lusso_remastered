import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";

function Header() {
  const { navLinks } = useContext(MainContext);

  const [isVisible, setIsVisible] = useState(false);

  const openMenu = () => setIsVisible(true);
  const closeMenu = () => setIsVisible(false);

  return (
    <header className="w-full py-5 px-5">
      <div className="wrapper flex justify-between items-center">
        <Link to={"/"}>
          <img src="./imgs/header-logo.png" alt="logo" />
        </Link>
        <button className="open-menu" id="open-menu" onClick={openMenu}>
          <i class="fa-solid fa-bars"></i>
        </button>
        <nav className={isVisible ? "visible": ""}>
          <button class="close-menu" id="close-menu" onClick={closeMenu}>
            <i class="fa-solid fa-x"></i>
          </button>
          <ul className="flex m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href} className="list-none mx-1.5">
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
