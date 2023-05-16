import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});


it("works when you click on the left arrow", () => {
  const {container} = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  //move forward
  const rightArrow = container.querySelector('.bi-arrow-right-circle');
  const leftArrow = container.querySelector('.bi-arrow-left-circle');

  //go to the second image and make sure it shows
  fireEvent.click(rightArrow);
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  //come back to the first image and make sure the second image doesn't show
  fireEvent.click(leftArrow);
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

});

it("takes away the LEFT arrow on the first image", ()=>{
  const {container} = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  //left arrow should start out invisible
  const leftArrow = container.querySelector('.bi-arrow-left-circle');
  const rightArrow = container.querySelector('.bi-arrow-right-circle');
  expect(leftArrow).not.toBeVisible();

  //go to next image and then come back to first.  left arrow should still be invisible.
  fireEvent.click(rightArrow);
  expect(leftArrow).toBeVisible();
  fireEvent.click(leftArrow);
  expect(leftArrow).not.toBeVisible();

});

it("takes away the RIGHT arrow on the last image", ()=>{
  const {container} = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  
  const leftArrow = container.querySelector('.bi-arrow-left-circle');
  const rightArrow = container.querySelector('.bi-arrow-right-circle');

  //right arrow should start out visible
  expect(rightArrow).toBeVisible();

  //go to last image, right arrow should disapear.  Go back one image and right arrow should reappear.
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  expect(rightArrow).not.toBeVisible();
  fireEvent.click(leftArrow);
  expect(rightArrow).toBeVisible();

});