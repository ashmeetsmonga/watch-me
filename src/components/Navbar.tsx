import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-5 items-center bg-black p-3 rounded-lg border-2 border-black-04 text-sm">
        <li className="bg-black-04 px-5 py-2 rounded-lg">Home</li>
        <li className="px-5 py-2 rounded-lg">Trending</li>
        <li className="px-5 py-2 rounded-lg">Top Rated</li>
      </ul>
    </nav>
  );
};

export default Navbar;
