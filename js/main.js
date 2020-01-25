(() => {
console.log("some message - from JavaScript");
  let

svg = document.querySelector("#cguita"),
svg1 = document.querySelector("#drums"),
svg2 = document.querySelector("#flute"),
svg3 = document.querySelector("#guitar"),
svg4 = document.querySelector("#harp"),
svg5 = document.querySelector("#keyb"),
svg6 = document.querySelector("#keyp"),
svg7 = document.querySelector("#mic"),
svg8 = document.querySelector("#musicbox");

  function logSVG()
  {
    console.log(this.id);
  }



svg.addEventListener("mouseover", logSVG);
svg1.addEventListener("mouseover", logSVG);
svg2.addEventListener("mouseover", logSVG);
svg3.addEventListener("mouseover", logSVG);
svg4.addEventListener("mouseover", logSVG);
svg5.addEventListener("mouseover", logSVG);
svg6.addEventListener("mouseover", logSVG);
svg7.addEventListener("mouseover", logSVG);
svg8.addEventListener("mouseover", logSVG);

})();