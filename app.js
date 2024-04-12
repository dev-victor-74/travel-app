

const menuBtn = document.querySelector(".menu-btn");
const navlinks =document.querySelector(".navlinks");
const dbtn =document.querySelector(".btn");
const dlink =document.querySelector(".dlink");
const elem = document.querySelector(".events")
const nav_btns =document.querySelectorAll("ul li a");


menuBtn.addEventListener("click", ()=>{

 navlinks.classList.toggle("mobile-menu");
})

nav_btns[0].style.color = "pink";


nav_btns.forEach((btn ,i )=>{
    btn.addEventListener("click", ()=>{
        nav_btns.forEach((btn)=>{
            btn.style.color = "gray";
        });
        
        btn.style.color = "pink";
    });
})




