var count = 0;

const btnIncrement = document.getElementById('btnIncrement');
const btnZerar = document.getElementById('btnZerar');

const increment = () => {
        count++  
        indicador.innerHTML =`O contador está com <mark>${count}</mark> cliques`   
}

btnIncrement.addEventListener('click', () => increment("add"));

btnZerar.addEventListener('click', function(){
   count = 0;
   indicador.innerHTML=null;
})