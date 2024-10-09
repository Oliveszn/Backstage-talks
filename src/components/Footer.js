import React from "react";

const Footer = () => {
  return (
    <footer className="text-left w-1/5 m-5 font-semibold text-lg">
      <p className="mb-2 leading-7">
        Backstage Talks is a magazine of casual, but in depth dialogues on
        design and business. Our decisions shape and influence this complex
        world—to have a chance to make the right ones, we need to talk.
      </p>
      <a href="https://buromilk.com/">
        <p className="mb-4 underline hover:no-underline text-sm">
          © 2024 Published by Büro Milk{" "}
        </p>
      </a>

      <a
        href="https://backstagetalks.com/privacy-policy.php"
        className="underline hover:no-underline font-bold"
      >
        <p>Privacy Policy</p>
      </a>
    </footer>
  );
};

export default Footer;
