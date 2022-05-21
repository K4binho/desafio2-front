const body = document.querySelector("body");
const container = document.querySelector(".container");
const info = document.querySelector(".highlight__info");
const cor_tema = document.querySelector(".btn-theme");
const btn_prev = document.querySelector(".btn-prev");
const btn_next = document.querySelector(".btn-next");
let theme = localStorage.getItem("theme") === "darkMode" ? "darkMode" : "whiteMode";

//altera o tema
const alterarTema = ()=>{
    //altera as cores/tema
    body.style.setProperty("--background-color", theme === "whiteMode" ? "var(--whiteMode)":"var(--darkMode)");
    info.style.setProperty("--highlight-background", theme === "whiteMode" ? "var(--whiteMode)":"var(--darkModeInfo)");
    body.style.setProperty("--color", theme === "whiteMode" ? "var(--darkMode)":"var(--whiteMode)");

    //muda o icone
    cor_tema.src=("--background-color", theme === "whiteMode" ? "./assets/light-mode.svg":"./assets/dark-mode.svg");

    //setas
    btn_prev.src=("--background-color", theme === "whiteMode" ? "./assets/seta-esquerda-preta.svg":"./assets/seta-esquerda-branca.svg");
    btn_next.src=("--background-color", theme === "whiteMode" ? "./assets/seta-direita-preta.svg":"./assets/seta-direita-branca.svg");

    //salva o tema no localStorage
    localStorage.setItem ("theme", theme);
};

//chama as funções
alterarTema();

//puxa o dark/white Mode depois da pagina ser fechada
cor_tema.addEventListener("click",()=>{
    theme = localStorage.getItem("theme") === "darkMode" ? "whiteMode" : "darkMode";
    alterarTema();
});


