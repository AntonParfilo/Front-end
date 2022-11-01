const body = document.querySelector("body");
const portfolio_button = document.querySelector(".header__portfolio");
const portfolio = document.querySelector(".portfolio");
const mobile_portfolio = document.querySelector(".mobile_portfolio");
const portfolio_close_button = document.querySelector(".portfolio_close_button");
const mobile_portfolio_close_button = document.querySelector(".mobile_close_btn");
const burger_icon = document.querySelector(".header__burger");
const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");
const block3 = document.querySelector(".block3");
const block4 = document.querySelector(".block4");
const block5 = document.querySelector(".block5");
const block6 = document.querySelector(".block6");
const block7 = document.querySelector(".block7");

//######################## CLICK PORTFOLIO BUTTON
portfolio_button.addEventListener("click", () => {
  if (window.innerWidth > 760) {
    body.classList.toggle("scrolloff");
    let interval = 300;
    portfolio.style.display = "flex";
    block1.classList.add("left_show");
    setTimeout(() => {
      block2.classList.add("left_show");
    }, interval);
    interval = interval + 100;
    setTimeout(() => {
      block3.classList.add("bottom_show");
    }, interval);
    interval = interval + 100;
    setTimeout(() => {
      block4.classList.add("left_show");
    }, interval);
    interval = interval + 100;
    setTimeout(() => {
      block5.classList.add("bottom_show");
    }, interval);
    interval = interval + 100;
    setTimeout(() => {
      block6.classList.add("left_show");
    }, interval);
    interval = interval + 200;
    setTimeout(() => {
      block7.classList.add("bottom_show");
    }, interval);
  }
  else{
    body.classList.toggle("scrolloff");
    mobile_portfolio.style.visibility="visible";
    mobile_portfolio.style.transform= "translateX(0)";
  }
});
//######################## CLICK PORTFOLIO CLOSE BUTTON
portfolio_close_button.addEventListener("click", () => {
  body.classList.toggle("scrolloff");
  interval = 300;
  block1.classList.add("left_hide");
  setTimeout(() => {
    block2.classList.add("left_hide");
  }, interval);
  interval = interval + 100;
  setTimeout(() => {
    block3.classList.add("bottom_hide");
  }, interval);
  interval = interval + 100;
  setTimeout(() => {
    block4.classList.add("left_hide");
  }, interval);
  interval = interval + 100;
  setTimeout(() => {
    block5.classList.add("left_hide");
  }, interval);
  interval = interval + 200;
  setTimeout(() => {
    block6.classList.add("left_hide");
  }, interval);
  interval = interval + 100;
  setTimeout(() => {
    block7.classList.add("left_hide");
  }, interval);
  interval = interval + 100;
  setTimeout(() => {
    block1.classList.remove("left_hide", "left_show");
    block2.classList.remove("left_hide", "left_show");
    block3.classList.remove("bottom_hide", "bottom_show");
    block4.classList.remove("left_hide", "left_show");
    block5.classList.remove("left_hide", "bottom_show");
    block6.classList.remove("left_hide", "left_show");
    block7.classList.remove("left_hide", "bottom_show");
    portfolio.style.display = "none";
  }, interval);
});

//######################## CLICK MOBILE PORTFOLIO CLOSE BUTTON
mobile_portfolio_close_button.style.transform="translateX(100%)";
mobile_portfolio_close_button.addEventListener("click", ()=>{
    body.classList.toggle("scrolloff");
    mobile_portfolio.style.visibility="hidden";
    mobile_portfolio.style.transform="translateX(100%)";
});

//######################## AUTO SCROLL PORTFOLIO IMAGES
const images_autoscroll = document.getElementsByClassName("img__autoscroll");
for (let el of images_autoscroll) {
  el.addEventListener("mouseenter", function (el) {
    let scroll_distance =
      el.target.offsetHeight - el.target.parentElement.offsetHeight;
    el.target.style.top = "-" + scroll_distance + "px";
  });
  el.addEventListener("mouseleave", function (el) {
    el.target.style.top = "0px";
  });
}

//######################## CLICK BURGER ICON
const burger_menu = document.querySelector(".burger__menu");
const body_wrapper = document.querySelector(".body__wrapper");
burger_icon.addEventListener("click", (el) => {
  body.classList.toggle("scrolloff");
  burger_icon.classList.toggle("active");
  burger_menu.classList.toggle("open");
  burger_menu.classList.contains("open") ? 
  body_wrapper.style.transform="translateX(-219px)" : body_wrapper.style.transform="translateX(0)";
});

//######################## CLICK BURGER LINKS
const mobile_links = document.getElementsByClassName("mobile__link");
for (let i = 0; i < mobile_links.length; i++) {
  mobile_links[i].addEventListener("click", () => {
    burger_icon.classList.toggle("active");
    burger_menu.classList.toggle("open");
    body.classList.toggle("scrolloff");
    body_wrapper.style.transform="translateX(0)";
  });
}
