function loadData() {
    // create a new request
    const xhr = new XMLHttpRequest();

    // what to do when response arrives
    xhr.onload = function () {
        console.log("Response finished");
        const container = document.getElementById("demo");
        container.innerHTML = this.responseText;
    };

    // prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
    xhr.open("GET", "./data/data.txt", false);

    // add a request header
    // xhr.setRequestHeader("MY_GF", "JavaScript");

    // send request
    xhr.send();

    console.log("hello");

    // abort
    // xhr.abort();
}
