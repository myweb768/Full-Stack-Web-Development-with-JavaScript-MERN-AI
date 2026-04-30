let menu_Btn = document.querySelector("#menuBtn");
let menu_Bar = document.querySelector("#menuBar");
let close_Menu =document.querySelector("#closeMenu");
menu_Btn.addEventListener("click", ()=>{
    menu_Bar.classList.add("openMenu");
});

menu_Btn.addEventListener("click", ()=>{
    menu_Bar.classList.remove("translate-x-full")
})

close_Menu.addEventListener("click", ()=>{
    menu_Bar.classList.add("translate-x-full");
})

// Home Scroll Code 
let home_Scroll =document.querySelector("#HomeScroll");
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 160){
        home_Scroll.style.display = "block";
    }
    else{
        home_Scroll.style.display = "none";
    }
})

home_Scroll.addEventListener("click", ()=>{
    window.scrollTo({top:0 , behavior:"smooth"});
});