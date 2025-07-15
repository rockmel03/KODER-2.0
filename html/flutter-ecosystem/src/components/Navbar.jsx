import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="bg-white text-black">
      <Container className={` flex items-center justify-between py-5`}>
        <div className="w-40">
          <img src="/flutter-logo.svg" alt="" className="w-full" />
        </div>
        <div className=" hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {[
              "Multi-Platform",
              "Development",
              "Ecosystem",
              "Showcase",
              "Docs",
            ].map((item, idx) => {
              return (
                <li
                  key={idx}
                  className=" text-sm font-medium hover:text-[#0768D7] hover:-translate-y-0.5 active:scale-90 transition duration-300 cursor-pointer"
                >
                  <a href="#">{item}</a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-5">
            <button className="w-10 h-10 rounded-full grid place-items-center text-xl hover:shadow hover:-translate-y-0.5 active:scale-90 transition duration-300 cursor-pointer">
              <i className="ri-search-2-line"></i>
            </button>
            <button className="px-5 py-2 rounded-full bg-[#0768D7] text-white text-sm font-semibold hover:-translate-y-0.5 hover:bg-[#0652a8] active:scale-90 transition duration-300 cursor-pointer">
              Get started
            </button>
          </div>
        </div>

        <button className="md:hidden ">
          <i className="ri-menu-line ri-xl"></i>
        </button>
      </Container>
    </nav>
  );
};

export default Navbar;
