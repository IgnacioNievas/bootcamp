'use strict'
const COLL = document.querySelectorAll(".collapsible");

for (let i = 0; i < COLL.length; i++) {
    COLL[i].addEventListener("click", function() {

        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}