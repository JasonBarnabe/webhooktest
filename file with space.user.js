// ==UserScript==
// @name testd
// @name:fr le testd
// @name:de die testd
// @namespace   http://userstyles.org/automation12345
// @description Disables things like alert, confirm, and prompt - useful for visiting sites with an automated tool like iMacros
// @description:fr le disable
// @description:de die disable
// @include     http://*
// @include     https://*
// @require     http://something.example
// @version     5
// ==/UserScript==
function fixIt() {
	window.onbeforeunload = function() {};
}
fixIt();
setInterval(fixIt, 200);
window.alert = function() {};
window.confirm = function() {};
window.prompt = function() {};


