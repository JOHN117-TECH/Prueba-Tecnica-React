import React from 'react';
import Vector from '../../assets/Vector.png';
import Bandera from '../../assets/Bandera.jpeg';
import '../../style/Header.css';
const Header = () => {
  return (
    <>
      <header className="Header">
        <div className="Header-Logo">
          <img src={Vector} alt="" width={80} />
          <div className="toggle-btn" id="_1st-toggle-btn">
            <input type="checkbox" />
            <span></span>
          </div>
        </div>
        <div className="Header-Nav">
          <nav>
            <li className="Link-a">
              <a href="#">
                <img src={Bandera} />
                Es
              </a>
            </li>
            <li className="Link-b">
              <a href="#">Hola, Camilo</a>
            </li>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;