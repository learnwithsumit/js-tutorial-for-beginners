const display = document.getElementById("display");

function getData() {
    fetch("http://localhost:5500/fetch/data.txt")
        .then((res) => res.text())
        .then((data) => {
            display.innerText = data;
        });
}
