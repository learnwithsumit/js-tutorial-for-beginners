// select dom element
const appName = document.getElementById("appName");
const appCodeName = document.getElementById("appCodeName");
const platform = document.getElementById("platform");
const cookieEnabled = document.getElementById("cookieEnabled");
const product = document.getElementById("product");
const appVersion = document.getElementById("appVersion");
const userAgent = document.getElementById("userAgent");
const onLine = document.getElementById("onLine");
const language = document.getElementById("language");
const javaEnabled = document.getElementById("javaEnabled");

// show window.navigator object property values
appName.innerHTML = "Navigator appName: " + navigator.appName;
appCodeName.innerHTML = "Navigator appCodeName: " + navigator.appCodeName;
platform.innerHTML = "Navigator platform: " + navigator.platform;
cookieEnabled.innerHTML = "Navigator cookieEnabled: " + navigator.cookieEnabled;
product.innerHTML = "Navigator product: " + navigator.product;
appVersion.innerHTML = "Navigator appVersion: " + navigator.appVersion;
userAgent.innerHTML = "Navigator userAgent: " + navigator.userAgent;
onLine.innerHTML = "Navigator onLine: " + navigator.onLine;
language.innerHTML = "Navigator language: " + navigator.language;
javaEnabled.innerHTML = "Navigator javaEnabled: " + navigator.javaEnabled();
