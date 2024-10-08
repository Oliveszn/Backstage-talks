import React, { useEffect, useRef } from "react";

const BookTwo = (props) => {
  const background = "bg-bgSecondary";
  return (
    <section className={`relative min-h-screen flex ${background}`}>
      <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
        <div>
          <img src="backstagetalks_cover_issue_7.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default BookTwo;
