import React from "react";
import Container from "./Container";

const Footer = () => {
  const footerLinks = [
    {
      heading: "About Flutter",
      links: [
        { title: "Careers", link: "#" },
        { title: "News", link: "#" },
        { title: "Brand", link: "#" },
        { title: "Culture", link: "#" },
      ],
    },

    {
      heading: "Learn Flutter",
      links: [
        { title: "Learning Journey", link: "#" },
        { title: "Codelabs", link: "#" },
        { title: "Samples", link: "#" },
        { title: "Cookbook", link: "#" },
      ],
    },

    {
      heading: " Multi-Platform",
      links: [
        { title: "Mobile", link: "#" },
        { title: "Web", link: "#" },
        { title: "Desktop", link: "#" },
        { title: "Embedded", link: "#" },
        { title: "iOS", link: "#" },
      ],
    },
  ];
  return (
    <footer className={`py-20`}>
      <Container>
        <div className="grid md:grid-cols-6 gap-10 md:gap-4">
          <div className="md:col-span-3">
            <div className="w-40">
              <img src="/flutter-logo.svg" alt="" className="w-full" />
            </div>
          </div>
          {footerLinks.map((linksArr, idx) => (
            <div key={idx} className="md:col-span-1">
              <h5 className="text-lg font-semibold mb-3">{linksArr.heading}</h5>
              <ul className="space-y-2">
                {linksArr.links.length > 0 &&
                  linksArr.links.map((item, idx) => (
                    <li key={idx} className="text-lg text-zinc-500">
                      <a href={item.link}>{item.title}</a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-6 mt-10 flex items-center gap-5 text-2xl text-zinc-700">
            <a>
              <i className="ri-youtube-fill"></i>
            </a>
            <a>
              <i className="ri-twitter-x-fill"></i>
            </a>
            <a>
              <i className="ri-instagram-fill"></i>
            </a>
            <a>
              <i className="ri-facebook-fill"></i>
            </a>
            <a>
              <i className="ri-linkedin-fill"></i>
            </a>
            <a>
              <i className="ri-twitch-fill"></i>
            </a>
          </div>
        </div>
        <hr className="my-10 border-zinc-500 border-1" />
        <div className="flex items-center justify-between gap-4  flex-col md:flex-row">
          <p className=" text-zinc-500 text-center md:text-left">
            Except as otherwise noted, this work is licensed under a Creative
            Commons Attribution 4.0 International License, and code samples are
            licensed under the BSD License.
          </p>

          <div className=" text-zinc-500 flex items-center gap-5">
            <h5>Terms</h5> <h5>Privacy</h5> <h5>Security</h5>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
