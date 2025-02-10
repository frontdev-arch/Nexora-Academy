import { Link } from "react-router-dom";
import { useState } from "react";
import "./css/Header.css";

const Header = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="header">
    <div className="header__container">
      
      {/* Logo */}
      <div className="header__branding">
        <img src="./images/nexoLogo.png" className="header__image" alt="Nexora Academy's Logo"/>
        <h1 className="header__logo">
            <Link to="/" className="header__logo-link">Nexora Academy</Link>
        </h1>
      </div>
      
  
      {/* Navigation */}
      <nav className="header__nav">
        <ul className="header__nav-list">
          {/* Home */}
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">Home</Link>
          </li>
  
          {/* About */}
        <li
            className="header__nav-item header__dropdown"
            onMouseEnter={() => toggleDropdown("about")}
            onMouseLeave={() => setDropdown(null)}
        >       
        <span className="header__dropdown-trigger header__nav-link">About</span>
            {dropdown === "about" && (
                <ul className="header__dropdown-menu">
                    <li className="header__dropdown-item">
                         <Link to="/about/core-values" className="header__dropdown-link">Core Values</Link>
                    </li>
                    <li className="header__dropdown-item">
                         <Link to="/about/why-nexora" className="header__dropdown-link">Why Nexora</Link>
                    </li>
                 </ul>
            )}
        </li>
  
          {/* Learning */}
          <li
            className="header__nav-item header__dropdown"
            onMouseEnter={() => toggleDropdown("learning")}
            onMouseLeave={() => setDropdown(null)}
          >
            <span className="header__dropdown-trigger header__nav-link">Learning</span>
            {dropdown === "learning" && (
              <ul className="header__dropdown-menu">
                <li className="header__dropdown-item">
                  <Link to="/learning/curriculum" className="header__dropdown-link">Curriculum</Link>
                </li>
                <li className="header__dropdown-item">
                  <Link to="/learning/academiccalendar" className="header__dropdown-link">Academic 
                  Calendar</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  
  );
};

export default Header;
