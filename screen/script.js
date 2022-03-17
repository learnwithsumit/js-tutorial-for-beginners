// select dom element
const width = document.getElementById("width");
const height = document.getElementById("height");
const availWidth = document.getElementById("availWidth");
const availHeight = document.getElementById("availHeight");
const colorDepth = document.getElementById("colorDepth");
const pixelDepth = document.getElementById("pixelDepth");

// show window.screen object property values
width.innerHTML = "Screen width: " + screen.width;
height.innerHTML = "Screen height: " + screen.height;
availWidth.innerHTML = "Screen availWidth: " + screen.availWidth;
availHeight.innerHTML = "Screen availHeight: " + screen.availHeight;
colorDepth.innerHTML = "Screen colorDepth: " + screen.colorDepth;
pixelDepth.innerHTML = "Screen pixelDepth: " + screen.pixelDepth;
