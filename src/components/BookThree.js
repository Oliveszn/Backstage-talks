import React from "react";

const BookThree = (props) => {
  const background = "bg-bgTetiary";
  return (
    <div className={`relative min-h-screen flex ${background}`}>
      <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
        Page 3
      </div>
    </div>
  );
};

export default BookThree;
