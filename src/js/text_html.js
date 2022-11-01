let scroll_window = 0;
let scroll_html_text = 0;
const timeouts = [];
const text_html_block = document.querySelector("#html_text");

let text_html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Лучший сайт</title></head><body><h1>Hello World!</h1></body></html>';
function text_html_start(){
    timer = 100;
    for(let i=0; i<text_html.length; i++){
        let timeout_id =  setTimeout(()=>{
            if(i === 15 || i === 31 || i === 37 || i === 59 || i === 112 || i === 182 || i === 208 || i === 215 || i === 221 || i === 242 || i === 249) text_html_block.innerHTML += "</br>";
            if(i === 37 || i === 59 || i === 112 || i === 182 || i === 221) text_html_block.innerHTML += "&nbsp&nbsp&nbsp&nbsp";
            text_html_block.innerHTML += text_html[i];
        }, timer);
        timeouts.push(timeout_id);
        timer = timer + 100;
    }
}
function html_text_stop(){
    text_html_block.innerHTML = "";
    timeouts.forEach(timeout => {
        clearTimeout(timeout);
    });
}
