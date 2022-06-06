function loadData(callbackF) {
    // create a new request
    const xhr = new XMLHttpRequest();

    // what to do when response arrives
    xhr.onload = function () {
        callbackF(this);
    };

    // prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
    xhr.open("GET", "./data/data.txt");

    // add a request header
    // xhr.setRequestHeader("MY_GF", "JavaScript");

    // send request
    xhr.send();

    // abort
    // xhr.abort();
}

function myCallback1(xhr) {
    const container = document.getElementById("demo");
    container.innerHTML = xhr.responseText;
}

function myCallback2(xhr) {
    const container = document.getElementById("demo2");
    container.innerHTML = xhr.responseText;
}
