// # level1_1

function double() {
  const num = Number(document.querySelector("#zahl").value);

  document.querySelector("#result1").innerHTML = num * 2;
}

// # level1_2
function calculate() {
  const years = Number(document.querySelector("#age").value);

  document.querySelector(".result2").innerHTML = 2023 - years;
}

// # level 1_3
function berechne() {
  const first = Number(document.querySelector("#age1").value);
  const second = Number(document.querySelector("#age2").value);

  document.querySelector(".result3").innerHTML = second - first + " Jahre";
}

// # COUNTER

function plus1() {
  let result = Number(document.querySelector(".result4").innerHTML);
  document.querySelector(".result4").innerHTML = result + 1;
}

function minus1() {
  let result = Number(document.querySelector(".result4").innerHTML);
  document.querySelector(".result4").innerHTML = result - 1;
}

function plus10() {
  let result = Number(document.querySelector(".result4").innerHTML);
  document.querySelector(".result4").innerHTML = result + 10;
}

function minus10() {
  let result = Number(document.querySelector(".result4").innerHTML);
  document.querySelector(".result4").innerHTML = result - 10;
}

function plus100() {
  let result = Number(document.querySelector(".result4").innerHTML);
  document.querySelector(".result4").innerHTML = result + 100;
}

function minus100() {
  let result = Number(document.querySelector(".result4").innerHTML);
  document.querySelector(".result4").innerHTML = result - 100;
}

// --Warum geht das nicht?????
function resetet() {
  let result = Number(document.querySelector(".result4").innerHTML);
  console.log(result);
  document.querySelector(".result4").innerHTML = 0;
}
// --------------------------

function multiply() {
  let result = Number(document.querySelector(".result4").innerHTML);
  document.querySelector(".result4").innerHTML = result * 2;
}

// #level1_2 - Bgc ändern

function changebgc() {
  const color = document.querySelector("#color").value;
  document.querySelector("body").style.backgroundColor = color;
}

//# level3_3 change-body

function changeBackground() {
  const red = Number(document.querySelector("#red").value);
  const green = Number(document.querySelector("#green").value);
  const blue = Number(document.querySelector("#blue").value);

  document.querySelector("body").style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
}

// #level2_1 onclick

function changeHeadline() {
  const red = document.querySelector(".headline");
  red.classList.add("styling");
}

function resetHeadline() {
  const none = document.querySelector(".headline");
  none.classList.remove("styling");
}
