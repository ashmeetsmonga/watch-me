import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 left-0 px-20 py-10 w-full bg-gradient-to-b from-black">
      <Logo />
      <Navbar />
      Search
    </div>
  );
};

export default Header;
