const fname = document.getElementById("fname-input");
const lname = document.getElementById("lname-input");
const email = document.getElementById("email-input");
const radio1 = document.getElementById("radio-1");
const radio2 = document.getElementById("radio-2");
const msg = document.getElementById("msg-input");
const checkbox = document.getElementById("checkbox");
const btn = document.getElementsByTagName("button");
const input = document.getElementsByTagName("input");

const fnameError = document.getElementById("fname-error-text");
const lnameError = document.getElementById("lname-error-text");
const emailError = document.getElementById("email-error-text");
const queryError = document.getElementById("query-error-text");
const msgError = document.getElementById("msg-error-text");
const checkboxError = document.getElementById("consent-error-text");

function onChangeFname() {
  fname.classList.remove("error");
  fnameError.classList.add("hidden");
}

function onChangeLname() {
  lname.classList.remove("error");
  lnameError.classList.add("hidden");
}

function onChangeEmail() {
  email.classList.remove("error");
  emailError.classList.add("hidden");
}

function onChangeMsg() {
  msg.classList.remove("error");
  msgError.classList.add("hidden");
}

btn[0].addEventListener("click", () => {
  if (fname.value === "") {
    fnameError.classList.remove("hidden");
    fname.classList.add("error");
  } else {
    fnameError.classList.add("hidden");
    fname.classList.remove("error");
  }

  if (lname.value === "") {
    lnameError.classList.remove("hidden");
    lname.classList.add("error");
  } else {
    lnameError.classList.add("hidden");
    lname.classList.remove("error");
  }

  if (email.value === "") {
    emailError.textContent = "This field is required";
    emailError.classList.remove("hidden");
    email.classList.add("error");
  } else {
    emailError.classList.add("hidden");
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!email.value.match(regex)) {
      emailError.textContent = "Please enter a valid email";
      emailError.classList.remove("hidden");
      email.classList.add("error");
    } else {
      emailError.classList.add("hidden");
      email.classList.remove("error");
    }
  }

  if (!radio1.checked && !radio2.checked) {
    queryError.classList.remove("hidden");
  } else {
    queryError.classList.add("hidden");
  }

  if (msg.value === "") {
    msgError.classList.remove("hidden");
    msg.classList.add("error");
  } else {
    msgError.classList.add("hidden");
    msg.classList.remove("error");
  }

  if (!checkbox.checked) {
    checkboxError.classList.remove("hidden");
  } else {
    checkboxError.classList.add("hidden");
  }
});
