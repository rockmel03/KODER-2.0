import React from "react";
import EmailSignup from "./Landing/EmailSignup";

const Footer = () => {
  const footerLinks = [
    ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
    ["Help Centre", "Jobs", "Cookie Preferences", "Legal Notices"],
    ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
    ["Media Centre", "Terms of Use", "Contact Us"],
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <EmailSignup size="medium" showText={false} />
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-gray-400">
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <ul className="space-y-3">
                {column.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>
            &copy; 2025 Netflix India. Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
