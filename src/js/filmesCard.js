// - background-image da `<div class="movie">` === poster_path
// - texto do `<span class="movie__title">` === title
// - texto do `<span class="movie__rating">` === vote_average

//cubos flix
const moviesContainer = document.querySelector(".movies");

//revisão 
let filmes = [];
let filmesSearch = [];

//card principais

// a função getFilmes pega o array de filmes
const getFilmes = async () => {
    const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false');

    const data = await response.json();
    
    filmes = data.results;
    filmesSearch = filmes;
}

// a buildelements cria os card e coloca no html
const buildElements = (item) =>{
    //cria a div no html
    const cardProduct = document.createElement("div");
    
    //da a class "card-Filme" para a div
    cardProduct.classList.add("movie");

    //banner das div
    cardProduct.style.backgroundImage = `url(${item.poster_path})`;

    //cria o elemento img no html
    const card = document.createElement("div");
    card.classList.add("movie__info");

    //cria o nome do filme
    const title = document.createElement('span');
    title.classList.add('movie__title');
    title.textContent = item.title;

    //cria a estrela da nota do filme
    const estrela = document.createElement("img");
    estrela.src = "./assets/estrela.svg";
    estrela.alt = "estrela";

    //cria o nota do filme
    const nota = document.createElement('span');
    nota.classList.add('movie__rating');
    nota.textContent = item.vote_average;

    //manda td 
    card.appendChild(title);
    card.appendChild(estrela)
    card.appendChild(nota);
    cardProduct.appendChild(card);

    //manda tudo em "cardProduct" para a div com a classe movies
    moviesContainer.append(cardProduct);
}
// o makecard separa o array de filme para poder criar os card
const makeCardFilmes = (start, end) => {
    const temp = filmesSearch.slice(start, end);
    moviesContainer.innerHTML = '';
    temp.forEach(item => {
        buildElements(item);
    });
}

//fim dos cards principais
const init = async () => {
    await getFilmes();
    makeCardFilmes(0, 4);
}
init();

