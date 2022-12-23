
const menuIcon = document.getElementById("menu-icon-box");


menuIcon.addEventListener("click", ()=>{
    document.getElementById("menu").classList.toggle("show-menu");
    if(document.getElementById("menu-icon").classList.contains("fa-bars")){
        document.getElementById("menu-icon").classList.remove("fa-bars");
        document.getElementById("menu-icon").classList.add("fa-xmark");
        console.log("class change");
    }
    else{
        document.getElementById("menu-icon").classList.remove("fa-xmark");
        document.getElementById("menu-icon").classList.add("fa-bars");
    }
})

let links = document.getElementsByClassName("link");

links = Array.from(links)

links.forEach((e)=>{
    e.addEventListener("click", ()=>{
        document.getElementById("menu").classList.remove("show-menu");
    })
});


const navLinks = document.getElementsByClassName("link");

console.log(navLinks);

Array.from(navLinks).forEach((element)=>{
    element.addEventListener("click", ()=>{
        document.getElementById("menu-icon").classList.remove("fa-xmark");
        document.getElementById("menu-icon").classList.add("fa-bars");
    });
});

