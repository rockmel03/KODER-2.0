import React from "react";
import Container from "./Container";
import { CommunitySectionsData as data } from "../Constants";

const CommunitySection = () => {
  return (
    <section>
      <Container className={`grid md:grid-cols-3 gap-5 py-20 px-[10vw]`}>
        {data.map((item, idx) => (
          <div key={idx} className="border-t-4 border-zinc-200 py-5 space-y-5">
            <h2 className="text-3xl font-semibold">{item.title}</h2>
            <p className="text-[1.2rem] text-zinc-500 w-[85%]">
              {item.description}
            </p>
            <div className="w-full">
              <img
                className="w-full h-full object-cover"
                src={item.imgUrl}
                alt=""
              />
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default CommunitySection;
