let listaProdutos = [
    {
        id: 1,
        nome: 'Faces do Brasil',
        safra: 2019,
        preco: 58.64,
        uvas: 'Merlot, Tannat, Cabernet Sauvignon',
        descricao: 'De coloração vermelho rubi, esse vinho traz consigo aromas de amora, framboesa, morango e cravo, com paladar frutado, de corpo médio, bom volume em boca, taninos maduros e notas de especiarias.',
        origem: 'Brasil',
        espumante: false,
        imgvinho: "./assets/img/faces-do-brasil-merlot-2019.jpg"
    },
    {
        id: 2,
        nome: 'Solidário',
        safra: 2017,
        preco: 61.58,
        uvas:'Cabernet Sauvignon, Merlot',
        descricao: 'De coloração vermelho rubi, esse vinho traz consigo aromas de especiarias, cereja, baunilha e café, com paladar macio e agradável.',
        origem: 'Brasil',
        espumante: false,
        imgvinho: "./assets/img/vinho-casa-perini-solidario.jpg"
    },
    {
        id: 3,
        nome: 'Pericó Minerato',
        safra: 2017,
        preco: 538.32,
        uvas:'Merlot',
        descricao: 'De coloração vermelho violáceo, límpido e brilhante, esse vinho traz consigo aromas de frutas vermelhas, especiarias, chocolate, canela e café, com paladar aveludado, macio, equilibrado e estruturado.',
        origem: 'Brasil',
        espumante: false,
        imgvinho: "./assets/img/minerato.png"
    },
    {
        id: 4,
        nome: 'Clos Apalta',
        safra: 2018,
        preco: 1948.01,
        uvas:'Merlot, Carmenère, Cabernet Sauvignon',
        descricao: 'De coloração vermelho intenso e reflexos azulados, esse vinho traz consigo aromas de frutas vermelhas, negras e secas, com paladar de taninos equilibrados, corpo médio, estruturado, fresco e retrogosto prolongado.',
        origem: 'Chile',
        espumante: false,
        imgvinho: "./assets/img/clos-apalta.jpg"
    },
    {
        id: 5,
        nome: 'Malma Universo',
        safra: 2020,
        preco: 293.58,
        uvas:'Malbec',
        descricao: 'De coloração vermelho intenso e reflexos púrpura, esse vinho traz consigo aromas de ameixa, violeta e frutas maduras, com paladar frutado, notas de baunilha, elegante, estruturado e retrogosto prolongado.',
        origem: 'Argentina',
        espumante: false,
        imgvinho: "./assets/img/malma-universo.png"
    },
    {
        id: 6,
        nome: 'Incógnito',
        safra: 2011,
        preco: 1125.69,
        uvas:'Syrah',
        descricao: 'De coloração vermelho intenso, esse vinho traz consigo aromas de frutas vermelhas e baunilha, com paladar frutado, taninos maduros, notas amadeiradas e de baunilha.',
        origem: 'Portugal',
        espumante: false,
        imgvinho: "./assets/img/incognito.jpg"
    },
    {
        id: 7,
        nome: 'Rémy Massin',
        safra: 2012,
        preco: 880.95,
        uvas:'Pinot Noir, Chardonnay',
        descricao: 'De coloração rosada e perlage fino, esse espumante traz consigo aromas de frutas vermelhas, morango e flores, com paladar fresco, notas de frutas vermelhas e cremoso.',
        origem: 'França',
        espumante: true,
        imgvinho: "./assets/img/remy-massin.jpg"
    },
    {
        id: 8,
        nome: 'Cuvée Clive',
        safra: 2015,
        preco: 675.38,
        uvas:'Chardonnay, Pinot Noir',
        descricao: 'De coloração amarelo palha, esse espumante traz consigo aromas de pêssego, damasco, maçã, frutas cítricas, especiarias, amêndoa e notas tostadas, com paladar elegante, fresco e retrogosto prolongado.',
        origem: 'África do Sul',
        espumante: true,
        imgvinho: "./assets/img/cuvee-clive.jpg"
    },
    {
        id: 9,
        nome: 'Íride Nature Sur',
        safra: 2012,
        preco: 420.85,
        uvas:'Pinot Noir, Chardonnay',
        descricao: 'De coloração amarelo palha com reflexos dourados, esse espumante traz consigo aromas de frutas secas, mel e pão tostado, com paladar cremoso, elegante, persistente, com retrogosto agradável e de excelente acidez.',
        origem: 'Nacional',
        espumante: true,
        imgvinho: "./assets/img/iride3.jpg"
    }
];

let codigo=0;
let carrinhoCompras=[];
let ulCarrinho = document.querySelector('.ulCarrinho');
let valorTotal = document.querySelector('.valorTotal');
let quantidade = document.querySelector('.quantidade');
let btnFinalizar = document.querySelector('.btnFinalizar');
let ulMenu = document.querySelector('.ulMenu');
let btnPesquisa = document.querySelector('.btnPesquisa');

let sectionProdutos = document.querySelector('.produtos');
let ul = document.createElement('ul')
ul.className='ulProdutos';
sectionProdutos.appendChild(ul);


//RENDERIZANDO PRODUTOS
for(let cont = 0; cont<listaProdutos.length; cont++){
    let li = document.createElement('li');
    li.className='liProdutos';
    li.id=listaProdutos[cont].nome;
    ul.appendChild(li);

    let figure = document.createElement('figure');
    figure.className='imgContainer';
    li.append(figure);

    let article = document.createElement('article');
    article.className='descritivoVinho';
    article.innerText=listaProdutos[cont].descricao;
    figure.appendChild(article);

    let img = document.createElement('img');
    img.className='foto';
    img.src=listaProdutos[cont].imgvinho;
    img.alt=listaProdutos[cont].nome;
    figure.appendChild(img);

    let section = document.createElement('section');
    section.className='infoVinho';
    section.id='infoVinho';
    li.appendChild(section);

    let divNomeVinho = document.createElement('div');
    divNomeVinho.className='divNomeVinho';
    section.appendChild(divNomeVinho);

    let nomeVinho = document.createElement('p');
    nomeVinho.className='nomeVinho';
    nomeVinho.innerText=listaProdutos[cont].nome;
    divNomeVinho.appendChild(nomeVinho);

    let divTipoAnoUva = document.createElement('div');
    divTipoAnoUva.className='tipoAnoUva';
    section.appendChild(divTipoAnoUva);

    let pSafra = document.createElement('p');
    pSafra.className='texto';
    pSafra.innerText=`Safra: ${listaProdutos[cont].safra}`;
    divTipoAnoUva.appendChild(pSafra);

    let pUvas = document.createElement('p');
    pUvas.className='texto';
    pUvas.innerText=`${listaProdutos[cont].uvas}`;
    divTipoAnoUva.appendChild(pUvas);

    let pOrigem = document.createElement('p');
    pOrigem.className='texto';
    pOrigem.innerText=`${listaProdutos[cont].origem}`;
    divTipoAnoUva.appendChild(pOrigem);

    let pPreco = document.createElement('p');
    pPreco.className='valorUnitario';
    pPreco.innerText=`R$ ${listaProdutos[cont].preco}`;
    divTipoAnoUva.appendChild(pPreco);

    let divBtnComprar = document.createElement('div');
    divBtnComprar.className='btnComprar';
    section.appendChild(divBtnComprar);

    let btnAddCarrinho = document.createElement('button');
    btnAddCarrinho.className='addCarrinho';
    btnAddCarrinho.innerText='Comprar';
    btnAddCarrinho.value=cont;
    divBtnComprar.appendChild(btnAddCarrinho);

    btnAddCarrinho.addEventListener('click', function(){
        codigo=codigo+1;
        let itemAdd={
            nome: listaProdutos[btnAddCarrinho.value].nome,
            preco: listaProdutos[btnAddCarrinho.value].preco,
            id: codigo
        };
        carrinhoCompras.push(itemAdd);
        atualizaCarrinho();
    })

    figure.addEventListener('mouseover', function(){
        section.style.display='none';
        li.style.width='250px';
    })
    figure.addEventListener('mouseout', function(){
        section.style.display='block';
        li.style.width='200px';
    })
}

//PESQUISA
function search_wine() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('liProdutos');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].id.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else { 
            x[i].style.display="flex";                
        }
    }
}
btnPesquisa.addEventListener('click', function(event){
    event.preventDefault();
    search_wine();
});


//ATUALIZA CARRINHO
function atualizaCarrinho(){
    
    let liLinha = document.createElement('li');
    liLinha.className='linha'
    ulCarrinho.appendChild(liLinha);
    
    let pNomeItemLinha = document.createElement('p');
    pNomeItemLinha.className='nomeItemLinha';
    pNomeItemLinha.innerText=carrinhoCompras[carrinhoCompras.length-1].nome;
    liLinha.appendChild(pNomeItemLinha);
    
    let divAlinhaLinha = document.createElement('div');
    divAlinhaLinha.className='alinhaLinha';
    liLinha.appendChild(divAlinhaLinha);

    let pValorItemLinha = document.createElement('p');
    pValorItemLinha.className='valorItemLinha';
    pValorItemLinha.innerText=`R$ ${carrinhoCompras[carrinhoCompras.length-1].preco}`;
    divAlinhaLinha.appendChild(pValorItemLinha);

    let btnRemover = document.createElement('button');
    btnRemover.className='remover';
    btnRemover.innerText='-';
    btnRemover.value=codigo;
    divAlinhaLinha.appendChild(btnRemover);

    atualizaSoma();
    
    btnRemover.addEventListener('click', function(){
        let comparador=carrinhoCompras.length;
        let auxiliar=0;
        for(let cont=0;cont<comparador;cont++){
            if(carrinhoCompras[cont].id==btnRemover.value){
                auxiliar=cont;
                liLinha.style.display='none';
            }
        }
        carrinhoCompras.splice(auxiliar, 1);
        atualizaSoma();
    })
};

//ATUALIZA SOMA
function atualizaSoma(){
    soma=0;
    for(let cont=0; cont<carrinhoCompras.length; cont++){
        soma+=carrinhoCompras[cont].preco;
    }
    valorTotal.innerText=`R$ ${soma.toFixed(2)}`;
    quantidade.innerText=`Qtd.: ${carrinhoCompras.length}`;
}

//FINALIZAR COMPRA
btnFinalizar.addEventListener('click', function(){
    if(carrinhoCompras.length>0){
        alert(`Compra Realizada com Sucesso!\n\nValor da Compra: ${valorTotal.innerText}\n\nObrigado por comprar na Elegance Wine.\n`);
    }
    else{
        alert('Seu carrinho esta vazio');
    }
})


let textoMenu=['Todos', 'Vinhos Nacionais', 'Vinhos Importados', 'Espumantes'];
renderMenu(textoMenu);

//RENDERIZANDO MENU
function renderMenu(textoMenu){
    for(let cont=0;cont<textoMenu.length;cont++){
        let liMenu = document.createElement('li');
        liMenu.className='liMenu';
        liMenu.id=`0${cont+1}`;
        liMenu.innerText=textoMenu[cont];
        ulMenu.appendChild(liMenu);
        liMenu.addEventListener('click', function(){
            if(textoMenu[cont]=='Todos'){
                let x = document.getElementsByClassName('liProdutos');
                for (i = 0; i < x.length; i++) { 
                    x[i].style.display="flex";
                }
            }
            else if(textoMenu[cont]=='Vinhos Nacionais'){
                let x = document.getElementsByClassName('liProdutos');
                let nacional=[];
                let espumantes=[];
                let importado=[];
                for(let cont = 0; cont<listaProdutos.length; cont++){
                    if(listaProdutos[cont].origem=='Brasil'){
                        nacional.push(listaProdutos[cont]);
                    }
                    else if(listaProdutos[cont].espumante==true){
                        espumantes.push(listaProdutos[cont]);
                    }
                    else{
                        importado.push(listaProdutos[cont]);
                    }
                }
                for (i = 0; i < x.length; i++) { 
                    for(let cont = 0; cont<nacional.length; cont++){
                        if(x[i].id==nacional[cont].nome){
                            x[i].style.display="flex";
                            cont=nacional.length;
                        }
                        else{
                            x[i].style.display="none"; 
                        }
                    }
                }
            }
            else if(textoMenu[cont]=='Vinhos Importados'){
                let x = document.getElementsByClassName('liProdutos');
                let nacional=[];
                let espumantes=[];
                let importado=[];
                for(let cont = 0; cont<listaProdutos.length; cont++){
                    if(listaProdutos[cont].origem=='Brasil'){
                        nacional.push(listaProdutos[cont]);
                    }
                    else if(listaProdutos[cont].espumante==true){
                        espumantes.push(listaProdutos[cont]);
                    }
                    else{
                        importado.push(listaProdutos[cont]);
                    }
                }
                for (i = 0; i < x.length; i++) { 
                    for(let cont = 0; cont<importado.length; cont++){
                        if(x[i].id==importado[cont].nome){
                            x[i].style.display="flex";
                            cont=importado.length;
                        }
                        else{
                            x[i].style.display="none"; 
                        }
                    }
                }
            }
            else if(textoMenu[cont]=='Espumantes'){
                let x = document.getElementsByClassName('liProdutos');
                let nacional=[];
                let espumantes=[];
                let importado=[];
                for(let cont = 0; cont<listaProdutos.length; cont++){
                    if(listaProdutos[cont].origem=='Brasil'){
                        nacional.push(listaProdutos[cont]);
                    }
                    else if(listaProdutos[cont].espumante==true){
                        espumantes.push(listaProdutos[cont]);
                    }
                    else{
                        importado.push(listaProdutos[cont]);
                    }
                }
                for (i = 0; i < x.length; i++) { 
                    for(let cont = 0; cont<espumantes.length; cont++){
                        if(x[i].id==espumantes[cont].nome){
                            x[i].style.display="flex";
                            cont=espumantes.length;
                        }
                        else{
                            x[i].style.display="none"; 
                        }
                    }
                }
            }
        })
    }
}