import React from "react";
import Container from "./Container";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-bl from-[#F3FCFF] to-[#F7E0EA] to-95%">
      <Container className={`py-10`}>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="md:w-[40%] aspect-square flex items-center p-2">
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9]">
              A strong <br />
              ecosystem,
              <br />
              powered by <br />
              open source
            </h1>
          </div>
          <div className="md:w-[40%] aspect-square grid place-items-center">
            <img src="/hero.png" alt="hero_img" className="w-full" />
          </div>
        </div>
        <p className="md:w-[60%] text-center text-xl md:text-3xl font-medium mx-auto py-5">
          From packages and plugins to friendly developers, find all of the
          resources you need to be successful with Flutter.
        </p>
      </Container>
    </section>
  );
};

export default HeroSection;
