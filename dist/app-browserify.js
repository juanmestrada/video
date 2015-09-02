(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var totalImages = 36;
var images = new Array();
for (var i = 1; i < totalImages + 1; i++) {
	var filename = "IronMan";
	if (i < 10) filename += "00";else if (i < 100) filename += "0";
	filename += i + ".jpg";
	var img = new Image();
	img.src = "images/" + filename;
	images.push(img);
}

var canv = document.getElementById("background");
var context = canv.getContext("2d");
$(canv).width($(window).width()).height($(window).height());

var currentLocation = 0;

window.addEventListener("mousewheel", function (e) {
	e.preventDefault();

	var delta = Math.max(-1, Math.min(1, e.wheelDelta));
	if (delta == -1) currentLocation += 1;
	if (delta == 1) currentLocation -= 1;
	if (currentLocation < 0) currentLocation = 0;
	if (currentLocation > images.length) currentLocation = images.length;
	setImage(currentLocation);
});

function setImage(newLocation) {
	context.drawImage(images[newLocation], 0, 0, 1280, 720);
}

},{}]},{},[1]);
