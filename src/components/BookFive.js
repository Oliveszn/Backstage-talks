import React from "react";

const BookFive = (props) => {
  const background = "bg-bgFifth";

  return (
    <div className={`relative min-h-screen flex ${background}`}>
      <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
        Page 5
      </div>
    </div>
  );
};

export default BookFive;
