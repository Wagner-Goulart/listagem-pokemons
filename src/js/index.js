const alterarTemaBtn = document.querySelector('#botao-alterar-tema');
const body = document.querySelector('body');
const imagemBotaoAlterarTema = document.querySelector('.imagem-botao');

alterarTemaBtn.addEventListener('click', ()=>{
    const modoEscuroAtivo= body.classList.contains("modo-escuro");

    body.classList.toggle('modo-escuro');

    if(modoEscuroAtivo) {
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/moon.png");
    }

});

