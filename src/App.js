// import BookEight from "./components/BookEight";
// import BookFive from "./components/BookFive";
// import BookFour from "./components/BookFour";
// import BookOne from "./components/BookOne";
// import BookSeven from "./components/BookSeven";
// import BookThree from "./components/BookThree";
// import BookSixx from "./components/BookSixx";
// import BookTwo from "./components/BookTwo";
// import Navigation from "./components/Navigation";
import { useEffect, useRef } from "react";
import { data } from "./datafiles/data";

function App() {
  const GroupRef = useRef([]);

  const onScroll = (el) => {
    const styles = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect();

        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`;
    document.body.style.color = styles.group.dataset.txtcolor;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    // <div className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0">
    //   {/* <Navigation /> */}
    //   <div className="snap-always snap-center" id="">
    //     <BookOne id="section1" />
    //   </div>
    //   <div className="snap-always snap-center" id="">
    //     <BookTwo id="section2" />
    //   </div>
    //   <div className="snap-always snap-center" id="">
    //     <BookThree id="section3" />
    //   </div>
    //   <div className="snap-always snap-center" id="">
    //     <BookFour id="section4" />
    //   </div>
    //   <div className="snap-always snap-center" id="">
    //     <BookFive id="section5" />
    //   </div>
    //   <div className="snap-always snap-center" id="">
    //     <BookSixx id="section6" />
    //   </div>
    //   <div className="snap-always snap-center" id="">
    //     <BookSeven id="section7" />
    //   </div>
    //   <div className="snap-always snap-center" id="">
    //     <BookEight id="section8" />
    //   </div>
    // </div>
    <section>
      {data.map((group, i) => {
        return (
          <div
            ref={(el) => (GroupRef.current[i] = el)}
            key={i}
            className="h-screen container max-w-screen-xl mx-auto flex justify-center items-center"
            data-bgColor={group.theme.background}
          >
            <div className="text-center">
              <img
                src={group.image}
                alt="Cover of Backstage Talks Issue 8"
                className="w-full h-auto max-w-sm mx-auto"
              />
              <h1>{group.issue}</h1>
              <a href={group.link}>
                <p>{group.linkToBuy}</p>
              </a>
              <p>
                or in{" "}
                <a
                  href="https://backstagetalks.com/stocklist.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  selected stores
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default App;
