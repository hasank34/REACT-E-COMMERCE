import React from "react";
import NavbarLeft from "./navbarList/NavbarLeft";
import NavbarRight from "./navbarList/NavbarRight";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
