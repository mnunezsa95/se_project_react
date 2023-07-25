import React from "react";
import "./Header.css";
import headerLogo from "../../images/logo2.svg";
import avatarImage from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.js";

function Header({ onCreateModal, currentLocation = "Location N/A" }) {
  const currentDate = new Date().toLocaleDateString("default", { month: "long", day: "numeric" });
  const username = "Marlon Nunez";

  return (
    <header className="header">
      <div className="header__container">
        <img src={headerLogo} alt="WTWR logo" className="header__logo" />
        <p className="header__date">{currentDate},</p>
        <p className="header__city">{currentLocation}</p>
      </div>
      <div className="header__nav">
        <nav className="header__nav-section">
          <ul className="header__nav-container">
            <ToggleSwitch />
            <li>
              <button className="header__nav__button" type="text" onClick={onCreateModal}>
                + Add New Clothes
              </button>
            </li>
            <li>
              <div className="header__nav-link">
                {username}
                <img src={avatarImage} alt="Profile Avatar" className="header__nav-avatar" />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
