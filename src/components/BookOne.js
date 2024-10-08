import React, { useEffect, useRef } from "react";

const BookOne = (props) => {
  const background = "bg-bgPrimary";
  return (
    <section className={`relative min-h-screen flex ${background}`}>
      <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
        <div className="text-center">
          <img
            src="backstagetalks_cover_issue_8.png"
            alt="Cover of Backstage Talks Issue 8"
            className="w-full h-auto max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BookOne;
