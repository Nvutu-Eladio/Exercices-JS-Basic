let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let p1 = document.getElementById("p1");

btn1.addEventListener('click', function(){
    p1.innerHTML += `<p>Você clicou no primeiro botão</p>`
})

btn2.addEventListener('click', function(){
    p1.innerHTML += `<p>Você clicou no segundo botão</p>`
})

btn3.addEventListener('click', function(){
    p1.innerHTML += `<p>Você clicou no terceiro botão</p>`
})

btn4.addEventListener('click', function(){
    p1.innerHTML += `<p>Você clicou no quarto botão</p>`
})