const demo = document.getElementById("demo");
let i = 0;

while (i < 1000000000) {
    i++;
}

demo.innerHTML = i;
