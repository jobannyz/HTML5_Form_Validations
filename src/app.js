/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const html5Form = document.getElementById("FormSubmit");
html5Form.addEventListener("submit", e => {
  e.preventDefault();
  let alerta = document.getElementById("Red alert");

  function showAlert() {
    alerta.classList.add("alert", "alert-danger", "text-center");
    alerta.innerHTML = "<span>Some fields are missing</span>";
  }

  let cardnumber = document.getElementById("cardnumber");
  let cvc = document.getElementById("cvc");
  let amount = document.getElementById("amount");
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let city = document.getElementById("inputCity");
  let state = document.getElementById("inputState");
  let postalcode = document.getElementById("inputZip");
  let radio1 = document.getElementById("inlineRadio1");
  let radio2 = document.getElementById("inlineRadio2");
  let radio3 = document.getElementById("inlineRadio3");
  let radio4 = document.getElementById("inlineRadio4");

  if (cardnumber.value === "") {
    showAlert();
    cardnumber.classList.add("alert", "alert-danger");
  }
  if (cvc.value === "") {
    showAlert();
    cvc.classList.add("alert", "alert-danger");
  }
  if (amount.value === "") {
    showAlert();
    amount.classList.add("alert", "alert-danger");
  }
  if (firstname.value === "") {
    showAlert();
    firstname.classList.add("alert", "alert-danger");
  }
  if (lastname.value === "") {
    showAlert();
    lastname.classList.add("alert", "alert-danger");
  }
  if (city.value === "") {
    showAlert();
    city.classList.add("alert", "alert-danger");
  }
  if (state.value === "Choose...") {
    showAlert();
    state.classList.add("alert", "alert-danger");
  }
  if (postalcode.value === "") {
    showAlert();
    postalcode.classList.add("alert", "alert-danger");
  }

  if (
    !radio1.checked &&
    !radio2.checked &&
    !radio3.checked &&
    !radio4.checked
  ) {
    showAlert();
    radio1.classList.add("alert", "alert-danger");
    radio2.classList.add("alert", "alert-danger");
    radio3.classList.add("alert", "alert-danger");
    radio4.classList.add("alert", "alert-danger");
  }
});
