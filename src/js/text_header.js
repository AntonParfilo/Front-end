let write_text = [
  "Русский военный корабль - иди нахуй!",
  "Верстка HTML/CSS/JS по шаблонам Figma/PSD",
  "Разработка SPA приложений на React/Redux",
];
let write_text_block = document.getElementById("header_text");
function text_start(n) {
  let timer = 100;
  for (let i = 0; i < write_text[n].length; i++) {
    (function () {
      setTimeout(() => {
        write_text_block.innerHTML += write_text[n][i];
        i == write_text[n].length - 1 ? delete_text() : "";
      }, timer);
    })(i);
    timer = timer + 100;
  }
  function delete_text() {
    let timer = 50;
    setTimeout(() => {
      for (let i = 0; i <= write_text[n].length; i++) {
        (function () {
          setTimeout(() => {
            write_text_block.innerHTML = write_text[n].substr(0,write_text[n].length - i);
            if(write_text[n].length - i == 0) {
                write_text.length === n + 1 ? text_start(0) : text_start(n + 1);
            }
          }, timer);
        })(i);
        timer = timer + 50;
      }
    }, 3000);
  }
}
text_start(0);


