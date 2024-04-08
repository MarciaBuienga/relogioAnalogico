const hora = document.querySelector(".hora");
const min = document.querySelector(".min");
const seg = document.querySelector(".seg");

function obterHora() {
  const time = new Date();

  const getHoraRot = (360 / 12) * time.getHours();
  const getMinRot = (360 / 60) * time.getMinutes();
  const getSecRot = (360 / 60) * time.getSeconds();

  hora.style.transform = `rotate(${getHoraRot}deg)`;
  min.style.transform = `rotate(${getMinRot}deg)`;
  seg.style.transform = `rotate(${getSecRot}deg)`;
}

setInterval(() => {
  obterHora();
}, 1000);

obterHora();