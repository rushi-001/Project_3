// calling rectangle from index.html file
const rectangle = document.querySelector("#rectangle");

// function which stores the position of the client mouse courser
var mouseX = 0;
var mouseY = 0;

// to get the client mouse position
document.addEventListener("mousemove", function (event) {
  // storing the mouse position
  mouseX = event.clientX;
  mouseY = event.clientY;

  // get the position of the rectangle relative to the viewport
  let rect = rectangle.getBoundingClientRect(); // getBoundingClientRect() is an function which gives the position of top, bottom, left, right
  // console.log("Top:", rect.top);
  // console.log("left:", rect.left);
  // console.log("right:", rect.right);
  // console.log("bottom:", rect.bottom);

  // check the courser is the rectangle
  let inRectangle = (top, bottom, left, right, cursorX, cursorY) => {
    return (
      cursorX >= left && cursorX <= right && cursorY >= top && cursorY <= bottom
    ); // it's returns true and false
  };

  // finding the mid value of the rectangle
  let rectangleMidPosition = (rect.left + rect.right) / 2;

  // change color
  if (mouseX <= rectangleMidPosition && inRectangle(rect.top, rect.bottom, rect.left, rect.right, mouseX, mouseY)) {
    rectangle.style.backgroundColor = "red";
  } else if (mouseX >= rectangleMidPosition && inRectangle(rect.top, rect.bottom, rect.left, rect.right, mouseX, mouseY)) {
    rectangle.style.backgroundColor = "blue";
  } else {
    rectangle.style.backgroundColor = "black";
  }
});
