// calling rectangle from index.html file
const rectangle = document.querySelector("#rectangle");

// function which stores the position of the client mouse courser
var mouseX = 0;
var mouseY = 0;

// to get the client mouse position
document.addEventListener("mousemove", function (event) {
  
    // storing the mouse position
    mouseX = event.clientX;

    // get the position of the rectangle relative to the viewport
  let rect = rectangle.getBoundingClientRect();
//   console.log("Top:", rect.top);
// console.log("left:", rect.left);
// console.log("right:", rect.right);
// console.log("bottom:", rect.bottom);

    // check the courser is the rectangle
    let inBetween = (courser, top, bottom) => {
        return courser >= Math.min(top, bottom) && courser <= Math.max(top, bottom);
    }
    
    // finding the mid value of the rectangle
    let rectangleMidPosition = (rect.left+rect.right)/2;

  if (mouseX <= rectangleMidPosition && inBetween(mouseX, rect.top, rect.bottom)) {
    rectangle.style.backgroundColor = 'red';
  } else if (mouseX >= rectangleMidPosition && inBetween(mouseX, rect.top, rect.bottom)){
    rectangle.style.backgroundColor = "blue";
  } else {
    rectangle.style.backgroundColor = "black";
  }

});

