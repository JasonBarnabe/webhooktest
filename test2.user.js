// ==UserScript==
// @name something else 356
// @namespace http://userstyles.org/automation1
// @description Disables things like alert, confirm, and prompt - useful for visiting sites with an automated tool like iMacros
// @include http://*
// @include https://*
// @version 0.1
// ==/UserScript==
function fixIt() {
window.onbeforeunload = function() {};
}
fixIt();
setInterval(fixIt, 200);
window.alert = function() {};
window.confirm = function() {};
window.prompt = function() {};
