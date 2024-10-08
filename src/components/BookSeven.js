import React from "react";

const BookSeven = (props) => {
  const background = "bg-bgSeven";

  return (
    <section className={`relative min-h-screen flex ${background}`}>
      <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
        <div>
          <img src="backstagetalks_cover2017.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default BookSeven;
