(() => {

  console.log("Some Message popped up here");

  // document.querySelector('h1').textContent = "Hello there from the counsole"
  //
  // console.log("some massage - from JavaScript");

  let theButton = document.querySelector("#myButton"),
      theHeading = document.querySelector('h1'),
      svgImage = document.querySelector('#svgGraphic');

//this function changing the heading text
function changeText() {
  theHeading.textcontent = "Hello there from the console";
}


  function logSVG() {
    console.log(this.id);
  }

  theButton.addEventListener("click", changeText);
  svgImage.addEventListener("mouseover", logSVG);



})();
