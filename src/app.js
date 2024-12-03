/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palo = ["♣", "♠", "♥", "♦"];
let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

window.onload = function() {
  let randomPaloIndex = Math.floor(Math.random() * palo.length);
  let randomValueIndex = Math.floor(Math.random() * value.length);

  let selectedPalo = palo[randomPaloIndex];
  let selectedValue = value[randomValueIndex];
  document.querySelector(
    ".card-mid"
  ).textContent = `${selectedValue} ${selectedPalo}`;
};
