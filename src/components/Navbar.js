import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="flex items-center justify-between bg-[#008B8B] w-full h-20 text-white text-3xl px-3">
      <div>{props.title}</div>
      <div className="flex gap-10">
        <button className="hover:bg-white/5 hover:text-black">Home</button>
        <button className="hover:bg-white/5 hover:text-black">About Me</button>
        <button className="hover:bg-white/5 hover:text-black">Contact Us</button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title Missing",
};
