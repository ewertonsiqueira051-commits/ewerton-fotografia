const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach((element) => {

const top = element.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
element.classList.add("active");
}

});

});

window.dispatchEvent(new Event("scroll"));

function showService(service){

const modal = document.getElementById("serviceModal");
const title = document.getElementById("modalTitle");
const text = document.getElementById("modalText");

let mensagemWhatsapp = "";

if(service === "individual"){

title.innerHTML = "Ensaio Individual";

text.innerHTML = `
Sessão fotográfica personalizada para destacar sua personalidade.

<br><br>

✔ Direcionamento durante as fotos<br>
✔ Edição profissional<br>
✔ Entrega digital organizada<br>
✔ Valor promocional: R$100
`;

mensagemWhatsapp =
"Olá! Estava no seu site e gostaria de fazer um orçamento sobre Ensaio Individual.";

}

if(service === "casal"){

title.innerHTML = "Ensaio de Casal";

text.innerHTML = `
Registre momentos especiais ao lado de quem você ama.

<br><br>

✔ Fotos espontâneas e naturais<br>
✔ Direcionamento completo<br>
✔ Tratamento profissional<br>
✔ Valor promocional: R$200
`;

mensagemWhatsapp =
"Olá! Estava no seu site e gostaria de fazer um orçamento sobre Ensaio de Casal.";

}

if(service === "eventos"){

title.innerHTML = "Eventos";

text.innerHTML = `
Cobertura fotográfica para aniversários,
igrejas e eventos especiais.

<br><br>

✔ Cobertura profissional<br>
✔ Entrega organizada<br>
✔ Fotos editadas<br>
✔ A partir de R$300
`;

mensagemWhatsapp =
"Olá! Estava no seu site e gostaria de fazer um orçamento sobre Eventos.";

}

const botaoWhatsapp = document.querySelector("#serviceModal .btn");

botaoWhatsapp.href =
"https://wa.me/5511956825083?text=" +
encodeURIComponent(mensagemWhatsapp);

modal.style.display = "flex";

}

window.onclick = function(event){

const modal = document.getElementById("serviceModal");

if(event.target === modal){

modal.style.display = "none";

}

}

function closeModal() {
    document.getElementById("serviceModal").style.display = "none";
} 

function closeModal(){
    document.getElementById("serviceModal").style.display = "none";
}

window.onclick = function(event){
    const modal = document.getElementById("serviceModal");

    if(event.target === modal){
        modal.style.display = "none";
    }
}
