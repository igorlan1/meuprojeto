// variable
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const ckClosed = document.querySelector("#ckButton");
const ckReset = document.querySelector("#ckReset");

const message = [
  { mensagem: "primeira mensagem " },
  {
    mensagem: "segunda mensagem "
  },
  {
    mensagem: "terceira mensagem"
  },
  {
    mensagem: "quarta mensagem "
  },
  {
    mensagem: "quinta mensagem"
  },
  { mensagem: "1 mensagem " },
  {
    mensagem: "2 mensagem "
  },
  {
    mensagem: "3 mensagem"
  },
  {
    mensagem: "4 mensagem "
  },
  {
    mensagem: "5 mensagem"
  }
];
let randomIndex = Math.floor(Math.random() * message.length);

//eventos
ckClosed.addEventListener("click", handleCkClosed);
ckReset.addEventListener("click", handleCkReset);
//document.addEventListener("keydown", keyReset);
document.addEventListener("keydown", keyOpen);

function handleCkClosed() {
  screen1.classList.add("hide");
  screen2.classList.remove("hide");

  document.querySelector(
    ".screen2 p2"
  ).innerText = ` Sua menssagem é : ${message[randomIndex].mensagem}`;
}

function handleCkReset() {
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
}

function keyReset(e) {
  if (e.key === "Enter" && screen1.classList.contains("hide")) {
    handleCkReset();
  }
}

function keyOpen(o) {
  if (o.key === "Enter" && screen2.classList.contains("hide")) {
    handleCkClosed();
  }
}
