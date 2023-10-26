import Vector from '../../assets/Vector.png';
import Bandera from '../../assets/Bandera.jpeg';
import '../../style/Header.css';
import { useCsv } from '../../context/context';
import { Headers, HeaderLogo } from '../../style/Header';
const Header = () => {
  const { theme, setTheme } = useCsv();

  return (
    <>
      <Headers>
        <HeaderLogo>
          <img src={Vector} alt="" width={80} />
          <div className="toggle-btn" id="_1st-toggle-btn">
            <input type="checkbox" onClick={() => setTheme(!theme)} />
            <span></span>
          </div>
        </HeaderLogo>
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
      </Headers>
    </>
  );
};

export default Header;
