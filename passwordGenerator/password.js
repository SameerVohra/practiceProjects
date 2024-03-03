const passChar =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^*()/?=+";

const btn = document.querySelector("#btn");
const len = document.querySelector("#length");
let res = document.querySelector("#res");

btn.addEventListener("click", (e) => {
  console.log(e);
  let length = parseInt(len.value);
  //  e.preventDefault();
  if (isNaN(length)) {
    res.innerHTML = `<span id="error">Enter a valid length</span>`;
  } else if (length < 8) {
    res.innerHTML = `<span id="error">Minimum length is 8</span>`;
  } else if (length > 100) {
    res.innerHTML = `<span id="error">Maximum length is 100</span>`;
  } else {
    let Pass = "";
    let passLen = passChar.length;

    console.log(length);
    for (let i = 0; i < length; i++) {
      Pass += passChar[Math.floor(Math.random() * passLen)];
    }
    res.innerHTML = `<div id="genPass"><span id="head">PASSWORD:</span> ${Pass}</div>`;
  }
});
