import React from "react";

const BookFour = (props) => {
  const background = "bg-bgFourth";

  return (
    <div className={`relative min-h-screen flex ${background}`}>
      <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
        Page 4
      </div>
    </div>
  );
};

export default BookFour;
