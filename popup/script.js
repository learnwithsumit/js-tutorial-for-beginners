// select dom elements
const confirm = document.getElementById("confirm");
const prompt = document.getElementById("prompt");

function showAlert() {
    window.alert("Hello world");
}

function showConfirm() {
    let txt;

    if (window.confirm("Press a button!")) {
        txt = "You pressed ok!";
    } else {
        txt = "You pressed cancel!";
    }

    confirm.innerHTML = txt;
}

function showPrompt() {
    let person = window.prompt("Please enter your name:", "Harry potter");
    let txt;

    if (person === null || person === "") {
        txt = "User cancelled the prompt!";
    } else {
        txt = "Hello " + person + "! How are you?";
    }

    prompt.innerHTML = txt;
}
