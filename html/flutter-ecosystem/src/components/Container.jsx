import React from "react";

const Container = ({ className, children, ...rest }) => {
  return (
    <div
      className={`w-full max-w-screen-2xl mx-auto container px-5 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
