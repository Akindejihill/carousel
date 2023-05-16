import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  debugger;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx => ++currCardIdx);
  }

  function goBackwards() {
    setCurrCardIdx(currCardIdx => --currCardIdx);
  }

  
  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          id="left-arrow"
          className="bi bi-arrow-left-circle"
          style={{display : currCardIdx === 0 ? "none" : "inline"}}
          onClick={goBackwards}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          id="right-arrow"
          className="bi bi-arrow-right-circle"
          style={{display : currCardIdx === total-1 ? "none" : "inline"}}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
