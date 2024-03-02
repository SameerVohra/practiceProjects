const height = document.querySelector("#height");
const width = document.querySelector("#width");
const radius = document.querySelector("#radius");
const btn = document.querySelector("#submit");
const tleft = document.querySelector("#tleft");
const tright = document.querySelector("#tright");
const bleft = document.querySelector("#bleft");
const bright = document.querySelector("#bright");

btn.addEventListener("click", (e) => {
  console.log(e);

  if (height.value <= 0 || isNaN(height.value)) {
    document.querySelector("#message").innerHTML = "Enter a valid height";
  } else if (radius.value < 0 || isNaN(radius.value)) {
    document.querySelector("#message").innerHTML = "Enter a valid radius";
  } else if (width.value <= 0 || isNaN(width.value)) {
    document.querySelector("#message").innerHTML = "Enter a valid width";
  } else if (tleft.value < 0 || isNaN(tleft.value)) {
    document.querySelector("#message").innerHTML =
      "Enter a valid top left radius";
  } else if (tright.value < 0 || isNaN(tright.value)) {
    document.querySelector("#message").innerHTML =
      "Enter a valid top right radius";
  } else if (bleft.value < 0 || isNaN(bleft.value)) {
    document.querySelector("#message").innerHTML =
      "Enter a valid bottom left radius";
  } else if (bright.value < 0 || isNaN(bright.value)) {
    document.querySelector("#message").innerHTML =
      "Enter a valid bottom right radius";
  } else {
    document.querySelector("#message").innerHTML = "";
    document.querySelector("#box").style.height = height.value + "px";
    document.querySelector("#box").style.width = width.value + "px";
    if (radius.value !== "0") {
      document.querySelector("#box").style.borderRadius = radius.value + "px";
    }
    if (tleft.value !== "0") {
      document.querySelector("#box").style.borderTopLeftRadius =
        tleft.value + "px";
    }

    if (tright.value !== "0") {
      document.querySelector("#box").style.borderTopRightRadius =
        tright.value + "px";
    }

    if (bleft.value !== "0") {
      document.querySelector("#box").style.borderBottomLeftRadius =
        bleft.value + "px";
    }

    if (bright.value !== "0") {
      document.querySelector("#box").style.borderBottomRightRadius =
        bright.value + "px";
    }
  }
});
