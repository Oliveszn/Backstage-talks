import BookEight from "./components/BookEight";
import BookFive from "./components/BookFive";
import BookFour from "./components/BookFour";
import BookOne from "./components/BookOne";
import BookSix from "./components/BookSIx";
import BookSeven from "./components/BookSeven";
import BookThree from "./components/BookThree";
import BookTwo from "./components/BookTwo";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0">
      {/* <Navigation /> */}
      <div className="snap-always snap-center" id="page1">
        <BookOne />
      </div>
      <div className="snap-always snap-center" id="page1">
        <BookTwo />
      </div>
      <div className="snap-always snap-center" id="page1">
        <BookThree />
      </div>
      <div className="snap-always snap-center" id="page1">
        <BookFour />
      </div>
      <div className="snap-always snap-center" id="page1">
        <BookFive />
      </div>
      <div className="snap-always snap-center" id="page1">
        <BookSix />
      </div>

      <div className="snap-always snap-center" id="page1">
        <BookSeven />
      </div>
      <div className="snap-always snap-center" id="page1">
        <BookEight />
      </div>
    </div>
  );
}

export default App;
