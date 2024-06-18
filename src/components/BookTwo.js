import React from "react";

const BookTwo = (props) => {
  const background = "bgSecondary";
  return (
    <div className={`relative min-h-screen flex ${background}`}>
      <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
        Page 2
      </div>
    </div>
  );
};

export default BookTwo;
