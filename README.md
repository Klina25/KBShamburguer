# 🍔 KBS Hamburgueria - Cardápio Digital com CRUD Local

Este é um projeto de um sistema de cardápio online e dinâmico desenvolvido para a **KBS Hamburgueria**. O grande diferencial desta versão é a implementação de um sistema de persistência de dados no Front-end, que gerencia as escolhas do cliente utilizando operações completas de **CRUD** através da API `LocalStorage` do navegador.

---

## 🚀 Funcionalidades e Operações CRUD

O sistema gerencia o estado da sacola de compras do cliente realizando as quatro operações fundamentais de manipulação de dados:

* **C - Create (Criar):** Ao clicar no botão `+` de um item que ainda não está na sacola, o sistema cria um novo objeto de pedido contendo ID, nome, preço unitário e quantidade inicial, inserindo-o no armazenamento local.
* **R - Read (Ler):** O JavaScript realiza a leitura dos dados em dois momentos: consome o array estático de produtos para renderizar os cards na tela e lê o `LocalStorage` em tempo real para sincronizar os contadores visuais e recalcular os totais sempre que a página é carregada ou atualizada.
* **U - Update (Atualizar):** Através dos seletores de `+` e `-`, o usuário altera a quantidade dos itens diretamente no card. O sistema localiza o registro correspondente no banco local e atualiza os valores matemáticos instantaneamente.
* **D - Delete (Deletar):** O botão de lixeira (excluir) remove o produto de forma definitiva da sacola de compras, utilizando filtragem de arrays para limpar o registro do armazenamento.
* **Fluxo de Checkout Seguro:** O painel inferior exibe o resumo com a quantidade total e o preço final da compra. O botão "Fazer Pedido" valida se há itens na sacola antes de limpar o carrinho e redirecionar o cliente para a tela de sucesso.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica das páginas (`index.html` e `sucesso.html`).
* **CSS3:** Estilização moderna, uso de CSS Grid para alinhamento dos produtos e layout responsivo fixado para o checkout.
* **JavaScript (ES6):** Manipulação dinâmica do DOM, lógica de persistência de dados e controle das operações CRUD.
* **Web Storage API (LocalStorage):** Armazenamento local no navegador para persistência dos dados da sacola de compras.
* **Font Awesome:** Ícones vetoriais de interação (como o botão de lixeira para exclusão).

---

## 📂 Estrutura do Projeto

* `index.html` - Página principal que exibe a grade do cardápio e o painel fixo de resumo.
* `sucesso.html` - Tela de confirmação exibida após a conclusão e limpeza do pedido.
* `style.css` - Arquivo de estilos visuais, transições e regras de responsividade para dispositivos móveis.
* `produtos.js` - Arquivo central contendo a base de dados dos produtos, funções de persistência e gerenciamento do CRUD do carrinho.
* `/imagem` - Pasta local contendo o logotipo e as fotos dos hambúrgueres, acompanhamentos e bebidas.
