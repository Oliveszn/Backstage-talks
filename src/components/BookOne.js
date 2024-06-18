import React from "react";
// const background = "bg-bgPrimary";

const BookOne = (props) => {
  const background = "bg-bgPrimary";
  return (
    <div className={`relative min-h-screen flex ${background}`}>
      <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
        Page 1
      </div>
    </div>
  );
};

export default BookOne;
