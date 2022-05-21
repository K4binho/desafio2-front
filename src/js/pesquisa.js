// const pesquisa = document.querySelector(".pesquisa__filter");

// pesquisa.addEventListener("keyup",()=>{
//     console.log("oi")
// });
const search = document.querySelector('.search__filter');

search.addEventListener('keydown', () => {
    if (search.value !== '') {
        filmesSearch = [];
        filmes.forEach(filme => {
            if (filme.title.toLowerCase().includes(search.value.toLowerCase())) {
                filmesSearch.push(filme);
            }
        });


    } else {
        filmesSearch = filmes;
    }
    makeCardFilmes(0, 4);
});


