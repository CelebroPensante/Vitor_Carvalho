let contador = 0;

function mudarCor() {
  contador++;

  if (contador === 3) {
    contador = 0;
    alterarCorAleatoria();
  }
}

function alterarCorAleatoria() {
  const corAleatoria = getRandomColor();
  document.body.style.backgroundColor = corAleatoria;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function configurarModoEscuro() {
    const botaoModoEscuro = document.getElementById("modoEscuroBtn");
    const body = document.body;

    if (localStorage.getItem("modoEscuro") === "ativo") {
        ativarModoEscuro();
    }

    botaoModoEscuro.addEventListener("click", () => {
        if (body.classList.contains("modo-escuro")) {
            desativarModoEscuro();
        } else {
            ativarModoEscuro();
        }
    });

    function ativarModoEscuro() {
        body.classList.add("modo-escuro");
        localStorage.setItem("modoEscuro", "ativo");
    }

    function desativarModoEscuro() {
        body.classList.remove("modo-escuro");
        localStorage.removeItem("modoEscuro");
    }
}

document.addEventListener("DOMContentLoaded", configurarModoEscuro);
