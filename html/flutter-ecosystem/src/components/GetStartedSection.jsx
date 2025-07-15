import React from "react";
import Container from "./Container";

const GetStartedSection = () => {
  return (
    <section className="py-20 px-5 md:px-20">
      <Container
        className={`bg-[#052449] text-white rounded-4xl bg-[url(https://storage.googleapis.com/cms-storage-bucket/get-started-background.72521e62275b24d3c37d.png)] bg-no-repeat bg-contain bg-right`}
      >
        <div className="space-y-5 px-5 py-5  md:py-30 md:px-20">
          <h1 className="text-5xl font-black">Get Started</h1>
          <p className="text-xl font-medium">
            Instant access to the power of the Flutter framework
          </p>
          <div className="flex items-center gap-4 justify-between md:justify-start">
            <button className="text-sm font-semibold  px-5 py-2 rounded-full bg-white text-blue-500 ">
              install
            </button>
            <button className="text-sm font-semibold px-5 py-2 flex items-center gap-1 ">
              <span> Read the docs</span>
              <span>
                <i className="ri-arrow-right-long-line"></i>
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetStartedSection;
