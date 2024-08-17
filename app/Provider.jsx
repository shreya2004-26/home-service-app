import React from "react";
import Header from "./_components/Header";

const Provider = ({ children }) => {
  return (
    <>
      <div className=" mx-6 md:mx-20">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Provider;
