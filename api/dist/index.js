"use strict";
var CATEGORIES;
(function (CATEGORIES) {
    CATEGORIES[CATEGORIES["MEAT"] = 1] = "MEAT";
    CATEGORIES[CATEGORIES["DAIRY"] = 2] = "DAIRY";
    CATEGORIES[CATEGORIES["DRINKS"] = 3] = "DRINKS";
})(CATEGORIES || (CATEGORIES = {}));
const p1 = { name: "coffee", price: 10, category: CATEGORIES.DRINKS };
const p2 = { name: "coffee", price: 10, category: CATEGORIES.DRINKS };
function getUser() {
    return { user: "galamouyal88@gmail.com" };
}
