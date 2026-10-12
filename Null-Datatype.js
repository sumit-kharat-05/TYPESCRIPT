"use strict";
const userName = null;
function showname() {
    if (userName === null) {
        return "No name provided";
    }
    return userName.toUpperCase(); // ✅ Safe: null is ruled out
}
showname();
