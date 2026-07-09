// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const visible = window.innerHeight - 120;

        if(top < visible){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// ===============================
// EFEITO PARALLAX NA FOTO
// ===============================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x = (window.innerWidth/2 - e.clientX)/45;
    const y = (window.innerHeight/2 - e.clientY)/45;

    heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

});

// ===============================
// MODAL DOS SERVIÇOS
// ===============================

function showService(service){

    const modal = document.getElementById("serviceModal");
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");

    const button = document.querySelector("#serviceModal .btn");

    let mensagem = "";

    switch(service){

        case "fotografia":

            title.innerHTML = "Fotografia Profissional";

            text.innerHTML = `
            Ensaios, eventos, empresas, produtos e retratos.

            <br><br>

            ✔ Direcionamento durante as fotos<br>
            ✔ Tratamento profissional<br>
            ✔ Entrega digital organizada<br>
            ✔ Atendimento personalizado
            `;

            mensagem = "Olá! Vi seu site e gostaria de solicitar um orçamento para Fotografia.";

        break;


        case "video":

            title.innerHTML = "Produção de Vídeos";

            text.innerHTML = `
            Produção de vídeos para empresas e redes sociais.

            <br><br>

            ✔ Reels<br>
            ✔ Bastidores<br>
            ✔ Vídeos promocionais<br>
            ✔ Conteúdo profissional
            `;

            mensagem = "Olá! Vi seu site e gostaria de solicitar um orçamento para Produção de Vídeos.";

        break;


        case "social":

            title.innerHTML = "Gestão de Redes Sociais";

            text.innerHTML = `
            Planejamento e criação de conteúdo para fortalecer sua presença digital.

            <br><br>

            ✔ Planejamento estratégico<br>
            ✔ Conteúdo para Instagram<br>
            ✔ Reels e Carrosséis<br>
            ✔ Acompanhamento do perfil
            `;

            mensagem = "Olá! Vi seu site e gostaria de solicitar um orçamento para Gestão de Redes Sociais.";

        break;

    }

    button.href =
    "https://wa.me/5544991080433?text=" +
    encodeURIComponent(mensagem);

    modal.style.display = "flex";

}


// ===============================
// FECHAR MODAL
// ===============================

function closeModal(){

    document.getElementById("serviceModal").style.display = "none";

}

window.addEventListener("click",(e)=>{

    const modal = document.getElementById("serviceModal");

    if(e.target === modal){

        modal.style.display = "none";

    }

});


// ===============================
// ANIMAÇÃO SUAVE AO CARREGAR
// ===============================

window.addEventListener("load",()=>{

    document.body.style.opacity = "1";

});
