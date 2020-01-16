import React from "react";
import PropTypes from "prop-types";

const Navbar = ({icon, title}) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </nav>
  );
};

Navber.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

Navber.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
