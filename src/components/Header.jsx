/* eslint-disable react/prop-types */
import {moonIcon, sunIcon} from "../assets/icons"

function Header(props) {
  return (
    <header>
      <h1>Where in the world?</h1>
      <button onClick={props.setDarkMode} className="darkmode">
        {props.darkMode ? sunIcon : moonIcon}
        <p>Dark Mode</p>
      </button>
    </header>
  );
}

export default Header;
