const prev = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');

let contador = 0;
let comecar = 0;
let final = 4;

prev.addEventListener('click', () => {
    comecar -= 2;
    final -= 2;
    contador--
    makeCardFilmes(comecar, final);
    if(contador < 0){
        console.log("final")
        comecar = 16;
        final = 20;
        makeCardFilmes(comecar, final);
        contador = 16;
    }
});

next.addEventListener('click', () => {

    comecar += 2;
    final += 2;
    contador++
    makeCardFilmes(comecar, final);

    //girar o carrosel 
    if(contador > 16){
        console.log("começo")
        comecar = 0;
        final = 4;
        makeCardFilmes(comecar, final);
        contador = 0;
    }
});