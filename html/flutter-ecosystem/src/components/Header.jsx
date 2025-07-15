import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";

const Header = () => {
  return (
    <header className="sticky top-0 w-full">
      <div className=" bg-gradient-to-r from-[#097BFC] from-60% to-[#865EF2] text-white py-5 px-5 ">
        <Container>
          <p className="text-sm font-semibold text-center">
            Flutter is back at Google I/O! Watch keynotes & sessions →
          </p>
        </Container>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
