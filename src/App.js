import { useEffect, useRef } from "react";
import { data } from "./datafiles/data";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const GroupRef = useRef([]);

  const onScroll = (el) => {
    const styles = GroupRef.current
      .map((group, i) => {
        if (!group) return null;
        const rect = group.getBoundingClientRect();

        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    if (styles) {
      document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`;
      document.body.style.color = styles.group.dataset.txtcolor;
    }
  };

  useEffect(() => {
    // Set the background color based on the initial section
    onScroll();

    // Add scroll event listener
    window.addEventListener("scroll", onScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <section>
        <Navigation />
        {data.map((group, i) => {
          return (
            <div
              ref={(el) => (GroupRef.current[i] = el)}
              key={i}
              className="h-screen container max-w-screen-xl mx-auto flex justify-center items-center"
              data-bgcolor={group.theme.background}
            >
              <div className="text-center">
                <img
                  src={group.image}
                  alt="Cover of Backstage Talks Issue 8"
                  className="w-full h-auto max-w-sm mx-auto"
                />
                <h1 className="font-bold text-lg">{group.issue}</h1>
                <a
                  className="font-semibold"
                  href={group.link}
                  style={{ color: group.theme.secColor }}
                >
                  <p>{group.linkToBuy}</p>
                </a>
                <p>
                  or in{" "}
                  <a
                    href="https://backstagetalks.com/stocklist.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: group.theme.secColor }}
                  >
                    selected stores
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}

export default App;
