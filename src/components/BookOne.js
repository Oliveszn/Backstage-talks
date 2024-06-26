import React from "react";

const BookOne = (props) => {
  const background = "bg-bgPrimary";
  return (
    <section className={`relative min-h-screen flex ${background}`}>
      <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
        <div>
          <img src="backstagetalks_cover_issue_8.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default BookOne;
