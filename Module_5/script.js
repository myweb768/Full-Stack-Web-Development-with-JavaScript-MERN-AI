let openBtn = document.querySelector("#menu_Open");
let closeBtn = document.querySelector("#menu_Close");
let menu = document.querySelector("menu")
openBtn.addEventListener("click", ()=>{
menu.classList.remove( "translate-x-full");
});

closeBtn.addEventListener("click", ()=>{
menu.classList.add("translate-x-full");
});

let collapseMenu = document.querySelector("#collapse_Menu");
let collapseList = document.querySelector("#collapse_List");
let arrowDown = document.querySelector("#arrow_Down");

collapseMenu.addEventListener("click", () => {
    if (collapseList.classList.contains("max-h-0")) {
        collapseList.classList.remove("opacity-0", "max-h-0");
        collapseList.classList.add("opacity-100", "max-h-50"); 
arrowDown.style.transform = "rotate(180deg)";

    } 
    else {
        collapseList.classList.add("opacity-0", "max-h-0");
        collapseList.classList.remove("opacity-100", "max-h-50");
arrowDown.style.transform = "rotate(0deg)";
    }
});