import React from "react";
import { Link } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <Link
      to="/"
      className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-2xl"
    >
      ShopStore
    </Link>
  );
};

export default NavbarLeft;
