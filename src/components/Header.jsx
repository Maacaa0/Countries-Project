import PropTypes from "prop-types"
import {moonIcon, sunIcon} from "../assets/icons"

Header.propTypes = {
  setDarkMode: PropTypes.func,
  darkMode: PropTypes.bool
}
function Header(props) {
  return (
    <header>
      <h1 className="text">Where in the world?</h1>
      <button onClick={props.setDarkMode} className="darkmode text">
        {props.darkMode ? sunIcon : moonIcon}
        <p>Dark Mode</p>
      </button>
    </header>
  );
}

export default Header;
