function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    
    const cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.tabIndex = 0; 
    
    const conteudo = document.createElement('div');
    conteudo.className = 'cartao__conteudo';
    
    const titulo = document.createElement('h3');
    titulo.textContent = categoria;
    
    const divPergunta = document.createElement('div');
    divPergunta.className = 'cartao__conteudo__pergunta';
    const pPergunta = document.createElement('p');
    pPergunta.textContent = pergunta;
    divPergunta.appendChild(pPergunta);
    
    const divResposta = document.createElement('div');
    divResposta.className = 'cartao__conteudo__resposta';
    const pResposta = document.createElement('p');
    pResposta.textContent = resposta;
    divResposta.appendChild(pResposta);
    
    conteudo.appendChild(titulo);
    conteudo.appendChild(divPergunta);
    conteudo.appendChild(divResposta);
    cartao.appendChild(conteudo);
    
 
    cartao.addEventListener('click', () => {
        cartao.classList.toggle('flipped');
    });
    
    
    cartao.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            cartao.classList.toggle('flipped');
        }
    });
    
    container.appendChild(cartao);
}

const perguntas = [
    {
        categoria: 'Historia do Brasil',
        pergunta: 'Quem foi o descobridor do Brasil?',
        resposta: 'Pedro Álvares Cabral, em 1500.'
    },
    {
        categoria: 'Historia do Brasil',
        pergunta: 'Qual foi o principal produto exportado durante o ciclo do açúcar?',
        resposta: 'Açúcar de cana.'
    },
   
];


perguntas.forEach((item) => {
    criaCartao(item.categoria, item.pergunta, item.resposta);
});