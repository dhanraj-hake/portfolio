
const menuIcon = document.getElementById("menu-icon");


menuIcon.addEventListener("click", ()=>{
    document.getElementById("menu").classList.toggle("show-menu");
    console.log("Cliked")
})

let links = document.getElementsByClassName("link");

links = Array.from(links)

links.forEach((e)=>{
    e.addEventListener("click", ()=>{
        document.getElementById("menu").classList.remove("show-menu")
    })
});

