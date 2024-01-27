const formEl = document.querySelector(".otp-form");
const otpList = document.querySelector(".otp-entered");
const length = formEl.children.length;

for (let i = 0; i < length; i++) {
  formEl.children[i].addEventListener("keydown", function (e) {
    if (
      length > i + 1 &&
      e.target.value.length === 0 &&
      e.key !== "Backspace"
    ) {
      setTimeout(() => {
        formEl.children[i + 1].focus();
      }, 0);
    }
    if (i > 0 && e.key === "Backspace" && e.target.value.length === 0) {
      setTimeout(() => {
        formEl.children[i - 1].focus();
      }, 0);
    }
  });
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const formDetails = new FormData(formEl);
  const listItem = document.createElement("li");
  listItem.textContent = "";
  for (let i = 0; i < 4; i++) {
    listItem.textContent += formDetails.get(i);
  }
  otpList.appendChild(listItem);
  formEl.reset();
  formEl.children[0].focus();
});
