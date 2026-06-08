// Array da lista de produtos da hamburgueria
const produtos = [
    {
        id: 1,
        nome: "Classic Burger",
        preco: 28.90,
        descricao: "Pão brioche, blend de 150g, queijo cheddar fatiado, alface, tomate e maionese artesanal.",
        categoria: "hamburguer",
        imagem: "./imagem/classic.png"
    },
    {
        id: 2,
        nome: "KBS Bacon Smash",
        preco: 34.90,
        descricao: "Dois smash burgers de 80g, muito cheddar, bacon crocante em tiras e molho barbecue.",
        categoria: "hamburguer",
        imagem: "./imagem/bacon-smash.png"
    },
    {
        id: 3,
        nome: "Batata Frita Tradicional",
        preco: 14.00,
        descricao: "Porção individual de batatas fritas crocantes, temperadas com sal e páprica.",
        categoria: "acompanhamento",
        imagem: "./imagem/batata.png"
    },
    {
        id: 4,
        nome: "Refrigerante Lata",
        preco: 6.00,
        descricao: "Lata de 350ml (Coca-Cola, Guaraná Antarctica ou Fanta).",
        categoria: "bebida",
        imagem: "./imagem/refrigerante.png"
    },
    {
        id: 5,
        nome: "Orion",
        preco: 12.00,
        descricao: "Porção individual de orion fritas crocantes.",
        categoria: "acompanhamento",
        imagem: "./imagem/orion.png"
    },
    {
        id: 6,
        nome: "Brownie de Doce de Leite",
        preco: 6.00,
        descricao: "Brownie recheada com Doce de Leite Caseiro.",
        categoria: "sobremesa",
        imagem: "./imagem/brownie.png"
    },
    {
        id: 7,
        nome: "Milk-Shake",
        preco: 25.00,
        descricao: "Milk-Shake de 500ml (Morango, Chocolate, Ovomaltine, Caramelo Salgado).",
        categoria: "bebida",
        imagem: "./imagem/milk-shake.png"
    },
    {
        id: 8,
        nome: "Combo Cheddar",
        preco: 38.00,
        descricao: "Pão brioche, blend de 150g de carne, duplo queijo cheddar fatiado, bacon fatiados, orion e maionese artesanal + refrigerante lata (350ml) + batata.",
        categoria: "combo",
        imagem: "./imagem/combo.png"
    },
    {
        id: 9,
        nome: "Nuggets",
        preco: 10.00,
        descricao: "6 unidades de nuggets.",
        categoria: "acompanhamento",
        imagem: "./imagem/nuggets.png"
    },
    {
        id: 10,
        nome: "Mini Cheese",
        preco: 15.00,
        descricao: "Pão brioche 35g, burger bovino de 75g, queijo cheddar e um molho a sua escolha.",
        categoria: "hamburguer",
        imagem: "./imagem/mini.png"
    },
    {
        id: 11,
        nome: "MCheese",
        preco: 26.00,
        descricao: "Sanduba com pão artesanal brioche, burger bovino 150g, queijo cheddar e dois molhos a sua escolha.",
        categoria: "hamburguer",
        imagem: "./imagem/cheese.png"
    },
    {
        id: 12,
        nome: "Combo Vegetariano",
        preco: 36.00,
        descricao: "Sanduba com pão artesanal brioche ou integral, burger de abobrinha 150g, queijo mussarela e maionese com alho frito + Batata + Regrigerante.",
        categoria: "combo",
        imagem: "./imagem/vegetariano.png"
    }
];

const CHAVE_STORAGE = "kbs_hamburgueria_carrinho";

// READ
function obterCarrinho() {
    const dados = localStorage.getItem(CHAVE_STORAGE);
    return dados ? JSON.parse(dados) : [];
}

// Salva o estado atual do carrinho no navegador
function salvarCarrinho(carrinho) {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(carrinho));
}

console.log("Produtos carregados com sucesso!", produtos);

function exibirCardapio() {
    const gridCardapio = document.getElementById("cardapio-dinamico");
    
    if (!gridCardapio) return; 

    gridCardapio.innerHTML = "";

    produtos.forEach(produto => {
        const card = document.createElement("div");
        card.className = "burger-card";

        card.innerHTML = `
            <div class="burger-img-container">
                <img src="${produto.imagem}" alt="${produto.nome}" class="burger-thumb">
            </div>
            <h3 style="color: #333; margin-top: 15px; margin-bottom: 5px;">${produto.nome}</h3>
            <p style="font-size: 14px; color: #666; margin-bottom: 10px;">${produto.descricao}</p>
            <span class="price" style="color: #521010; font-weight: bold; font-size: 18px; display: block; margin-bottom: 15px;">
                R$ ${produto.preco.toFixed(2).replace('.', ',')}
            </span>
            
            <div class="card-controls">
                <div class="quantity-selector">
                    <button class="btn-qty" onclick="alterarQuantidade(${produto.id}, -1)">-</button>
                    <span id="qtd-${produto.id}" class="qty-number">0</span>
                    <button class="btn-qty" onclick="alterarQuantidade(${produto.id}, 1)">+</button>
                </div>
                
                <button class="btn-remove" onclick="zerarQuantidade(${produto.id})" title="Remover item">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;

        gridCardapio.appendChild(card);
    });
}

// CREATE / UPDATE: Adiciona ou diminui itens manipulando o LocalStorage
function alterarQuantidade(id, valor) {
    const carrinho = obterCarrinho();
    
   
    const itemExistente = carrinho.find(item => item.id === id);
    

    const produtoOriginal = produtos.find(p => p.id === id);
    if (!produtoOriginal) return;

    if (itemExistente) {
        // UPDATE
        itemExistente.quantidade += valor;
        
        
        if (itemExistente.quantidade <= 0) {
            zerarQuantidade(id);
            return;
        }
    } else if (valor > 0) {
        // CREATE
        carrinho.push({
            id: produtoOriginal.id,
            nome: produtoOriginal.nome,
            preco: produtoOriginal.preco,
            quantidade: 1
        });
    }

    salvarCarrinho(carrinho);
    atualizarInterfaceGrafica();
}

// DELETE
function zerarQuantidade(id) {
    let carrinho = obterCarrinho();
 
    carrinho = carrinho.filter(item => item.id !== id);
    
    salvarCarrinho(carrinho);
    atualizarInterfaceGrafica();
}
// READ
function atualizarInterfaceGrafica() {
    const carrinho = obterCarrinho();
    let totalItens = 0;
    let valorTotalGeral = 0;

  
    produtos.forEach(p => {
        const spanQtd = document.getElementById(`qtd-${p.id}`);
        if (spanQtd) spanQtd.innerText = "0";
    });

   
    carrinho.forEach(item => {
        const spanQtd = document.getElementById(`qtd-${item.id}`);
        if (spanQtd) {
            spanQtd.innerText = item.quantidade;
        }
        totalItens += item.quantidade;
        valorTotalGeral += (item.quantidade * item.preco);
    });

   
    const resumoQtd = document.getElementById("resumo-qtd-total");
    const resumoValor = document.getElementById("resumo-valor-total");

    if (resumoQtd && resumoValor) {
        resumoQtd.innerText = `${totalItens} ${totalItens === 1 ? 'item selecionado' : 'itens selecionados'}`;
        resumoValor.innerText = `R$ ${valorTotalGeral.toFixed(2).replace('.', ',')}`;
    }
}

// página de sucesso 
function enviarPedido() {
   
    const carrinho = obterCarrinho();
    
    // Somamos as quantidades de tudo que está na sacola
    const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);

    // Se a soma for zero, bloqueia o envio
    if (totalItens === 0) {
        alert("Ops! Adicione pelo menos 1 item ao seu pedido antes de finalizar.");
        return;
    }

    
    localStorage.removeItem(CHAVE_STORAGE);

    window.location.href = "sucesso.html";
}

window.addEventListener("DOMContentLoaded", () => {
    exibirCardapio();            // Desenha os cards na tela
    atualizarInterfaceGrafica(); // Preenche as quantidades salvas no LocalStorage
});
