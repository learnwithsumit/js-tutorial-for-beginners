let myWindow;

// select dom element
const width = document.getElementById("width");
const height = document.getElementById("height");

// show window object properties
width.innerHTML = "Window inner width is: " + window.innerWidth;
height.innerHTML = "Window inner height is: " + window.innerHeight;

function openWindow() {
    myWindow = window.open("https://google.com", "_self");
}

function closeWindow() {
    myWindow.close();
}
