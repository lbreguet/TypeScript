﻿// @allowJS: true
// @suppressOutputPathCheck: true

// @filename: 0.js
// @ts-check
/** @type {String} */
var S = true;

/** @type {number} */
var n = "hello";

/** @type {function (number)} */
const x1 = (a) => a + 1;
x1("string");

/** @type {function (number): number} */
const x2 = (a) => a + 1;

/** @type {string} */
var a;
a = x2(0);

/** @type {function (number): number} */
const x2 = (a) => a.concat("hi");
x2(0);