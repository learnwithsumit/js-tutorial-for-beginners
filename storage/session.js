function setSessionStorage(name, value) {
    sessionStorage.setItem(name, value);
}

function getSessionStorage(name) {
    alert(`${name} : ${sessionStorage.getItem(name)}`);
}

function removeSessionStorage(name) {
    sessionStorage.removeItem(name);
}

function getSessionKeyLength() {
    alert(`sessionStorage has ${sessionStorage.length} keys`);
}

function clearStorage() {
    sessionStorage.clear();
}
