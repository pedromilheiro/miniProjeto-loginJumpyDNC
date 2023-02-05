const form = document.getElementById("form");
const inputsForm = document.querySelectorAll(".inputRequired");
const msgError = document.querySelectorAll(".msgError");
const msgReturn = document.querySelector(".return");
const btnSend = document.querySelector("#btnSubmit");
const returnPositive = document.querySelector(".returnPositive");

btnSend.setAttribute("disabled", "");

form.addEventListener("submit", (e) => {
  if (!btnSend.getAttributeNode("disabled")) {

    msgReturn.innerHTML = "Sucesso"
    msgReturn.style.color="#0f7b0f"

    setTimeout(()=>{
      form.submit()
    },3000);

  }
    e.preventDefault();

});

inputsForm.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.addEventListener("input", () => {
      if (element.value == "") {
        msgError[index].innerHTML = "*Campo obrigatorio.*";
        verifica();
      } else {
        msgError[index].innerHTML = "";
        verifica();
      }
    });
  });
});


function verifica() {
  let verificaArray = [];

  for (i = 0; i < inputsForm.length; i++) {
    if (inputsForm[i].value != "") {
      verificaArray.push(inputsForm[i].value);
    }
  }

  if (verificaArray.length != inputsForm.length) {
    msgReturn.innerHTML = "Campos obrigatorios não registrados.";
    btnSend.setAttribute("disabled", "");
    btnSend.style.backgroundColor = "#afafaf";
  } else {
    msgReturn.innerHTML = "";
    btnSend.removeAttribute("disabled");
    btnSend.style.backgroundColor = "#0C70F2";
  }
}


