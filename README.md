# 🍔 KBS Hamburgueria - Cardápio Digital

Este é um projeto de um sistema de cardápio online e dinâmico desenvolvido para a **KBS Hamburgueria**. O site permite que os usuários naveguem pelos produtos, visualizem fotos, descrições e preços, controlem a quantidade de itens diretamente pelos cartões e vejam o resumo do pedido atualizado em tempo real.

---

## 🚀 Funcionalidades

* **Cardápio Dinâmico:** Os produtos são gerados automaticamente a partir de uma estrutura de dados em JavaScript, facilitando a manutenção e adição de novos lanches.
* **Controle de Quantidade Eficiente:** Seletores de `+` e `-` integrados em cada produto, permitindo adicionar, diminuir ou zerar a contagem (botão de excluir).
* **Resumo de Pedido (Checkout Inferior):** Painel fixo no rodapé que exibe o total de itens selecionados e calcula o valor final da compra em tempo real.
* **Fluxo de Finalização:** Validação de segurança que impede o envio de pedidos vazios e redirecionamento para uma página de sucesso personalizada.
* **Interface Responsiva:** Layout adaptável para visualização em computadores, tablets ou celulares.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica das páginas (`index.html` e `sucesso.html`).
* **CSS3:** Estilização moderna, uso de CSS Grid para alinhamento dos produtos e layout responsivo.
* **JavaScript (ES6):** Manipulação dinâmica do DOM, lógica de cálculos de preço/quantidade e controle de fluxo.
* **Font Awesome:** Ícones vetoriais da barra de busca (lupa) e de exclusão (lixeira).

---

## 📂 Estrutura do Projeto

* `index.html` - Página principal com o cabeçalho e a grade do cardápio.
* `sucesso.html` - Tela de confirmação exibida após a conclusão do pedido.
* `style.css` - Arquivo de estilos, regras visuais e responsividade do site.
* `produtos.js` - Banco de dados local dos produtos (Array de Objetos) e funções de cálculo do sistema.
* `/imagem` - Pasta contendo a identidade visual (logo) e as fotos dos produtos.
