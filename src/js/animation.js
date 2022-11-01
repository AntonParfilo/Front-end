$(document).ready(()=>{

    const cascad_elements = $(".htmlcss__blocks");
    const show_el = $("[data-anim]");
        $(window).on("scroll", ()=>{
            scrollHandler();
        });

    function scrollHandler(){
        for(let i=0; i<show_el.length; i++){
            let show_distance;
            let isShow = show_el[i].classList.contains("active-"+show_el[i].getAttribute("data-anim"));
            let el_height = show_el[i].offsetHeight;
            if(el_height > window.innerHeight) {
                show_distance = window.innerHeight / 2;
            } else {show_distance = el_height / 2;}
            let el_rect = show_el[i].getBoundingClientRect().top - window.innerHeight;
                if(isShow){
                    if(el_rect > -50 || el_rect < window.innerHeight * -1 - el_height - 50){
                        show_el[i].classList.remove("active-"+show_el[i].getAttribute("data-anim"));
                        if(show_el[i].getAttribute("data-anim") == "cascad"){
                            hideCascad(cascad_elements);
                        }
                    }
                }
                else{
                    if(el_rect + show_distance < 0 && el_rect > window.innerHeight * -1 - el_height + show_distance){
                        show_el[i].classList.add("active-"+show_el[i].getAttribute("data-anim"));
                        if(show_el[i].getAttribute("data-anim") == "cascad"){
                            showCascad(cascad_elements);
                        }
                    }
                }
        };
    }
    function showCascad(elements){
        text_html_start();
        let timer = 0;
        for(let i=0; i<elements.length; i++){
            setTimeout(()=>{
                elements[i].style.transform="translateX(0%)";
            },timer);
            timer = timer +100;
        }
    }

    function hideCascad(elements){
        html_text_stop();
        for(let i=0; i<elements.length; i++){
            elements[i].style.transform="translateX(100%)";
        }
    }

    scrollHandler();

});
