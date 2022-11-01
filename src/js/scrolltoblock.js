// ССЫЛКАМ УКАЗАТЬ data-scrollTo=".класс"

const links = document.querySelectorAll("[data-scrollTo]");

for(let i=0; i < links.length; i++){
    let anchorClass = links[i].getAttribute("data-scrollTo");
    let anchor = document.querySelector(anchorClass);
    links[i].addEventListener("click", (event)=>{
        event.preventDefault();
        goTo(anchor);
    });
}

function goTo(anchor){
let rect = anchor.getBoundingClientRect().top + scrollY;
    window.scrollTo({
        top: rect,
        behavior: "smooth"
    });
}
