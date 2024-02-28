
const button = document.getElementById("runaway-btn");

const animateMove = (element, prop, pixels) =>
anime({
targets: element,
[prop]: `${pixels}px`,
easing: "easeOutCirc"
});

["mouseover", "click"].forEach(function (el) {
button.addEventListener(el, function (event) {
const top = getRandomNumber(window.innerHeight - this.offsetHeight);
const left = getRandomNumber(window.innerWidth - this.offsetWidth);

animateMove(this, "left", left).play();
animateMove(this, "top", top).play();
});
});

const getRandomNumber = (num) => {
return Math.floor(Math.random() * (num + 1));
};

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    document.cookie = "CTFslu{Fake_Flag}" + "=" + "O!at0_L0h_T0g_P00x13" + ";" + "58" + ";path=/";
  }

  window.onload = function() {
    setCookie();
  };