// ==UserScript==
// @name test
// @namespace   http://userstyles.org/automation
// @description Disables things like alert, confirm, and prompt - useful for visiting sites with an automated tool like iMacros
// @include     http://*
// @include     https://*
// @version     1
// ==/UserScript==
function fixIt() {
	window.onbeforeunload = function() {};
}
fixIt();
setInterval(fixIt, 200);
window.alert = function() {};
window.confirm = function() {};
window.prompt = function() {};
