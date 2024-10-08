import React from "react";

const BookEight = (props) => {
  const background = "bg-bgEight";

  return (
    <section className={`relative min-h-screen flex ${background}`}>
      <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
        <div>
          <img src="backstagetalks_cover2016_n.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default BookEight;
