// ==UserScript==
// @name         Disable DocumentClick
// @namespace    https://github.com/maziara/DisableDocumentClick
// @updateURL    https://raw.githubusercontent.com/maziara/DisableDocumentClick/master/DisableDocumentClick.js
// @version      0.1
// @description  Disabling the click popups that advertisers use on the whole document.
// @author       Maziara
// @include      *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var counter = 0;
    var i = setInterval(function(){
        // Checking for an event to register for 6 seconds
        //console.log(document.onclick);

        if (typeof(document.onclick) == "function"){
            disableDocumentClick();
        }
        if (typeof(document.mousedown) == "function"){
            disableDocumentMouseDown();
        }

        counter++;
        if(counter === 30) {
            clearInterval(i);
        }
    }, 200);
    function disableDocumentClick(){
        console.log("***** document.click event detected. Disabling...");
        document.onclick = undefined;
    }
    function disableDocumentMouseDown(){
        console.log("***** document.click event detected. Disabling...");
        document.mousedown = undefined;
    }

})();
