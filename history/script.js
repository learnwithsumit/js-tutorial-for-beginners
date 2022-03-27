function back() {
    window.history.back();
}

function backTo(n) {
    window.history.go(n);
}

function forward() {
    window.history.forward();
}

function getHistory() {
    alert(window.history.length);
}
