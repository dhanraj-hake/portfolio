
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



const contactForm = document.getElementById("contactForm");

const modal = document.getElementById("modal");

const modalmessage = document.getElementById("modalmessage");

contactForm.addEventListener("submit", async(event)=>{
    event.preventDefault();
    


    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const desc = event.target.desc.value;

    contactForm.reset();

    try{

        const response = await fetch("http://dhanrajportfolioapi.pythonanywhere.com/contact",{
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name : name,
                email : email,
                phone : phone,
                desc : desc
            })
        });

        const result = await response.json();
        console.log(result);

        if(result.message==="success"){
            modalmessage.textContent = "Your Contact form Send to Dhanraj hake"
            modalmessage.style.backgroundColor = "#d1e7dd";
            setTimeout(() => {
                modal.style.display = "none";
            }, 4000);
        }
        else{
            modalmessage.textContent = "Enter Valid Detail";
            modalmessage.style.backgroundColor = "#d9534f";
            setTimeout(() => {
                modal.style.display = "none";
            }, 4000);
        }

        modal.style.display = "block";
        
        
        

    }
    catch(error){

    }


})