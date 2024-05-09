 document.addEventListener("DOMContentLoaded", function() {
            const menuToggle = document.querySelector(".menu-toggle");
            const dropDownMenu = document.querySelector(".drop-down-menu");

            menuToggle.onclick = function(){
                dropDownMenu.classList.toggle("open");
            }
        });