const queryString = window.location.search;
const params = new URLSearchParams(queryString);

const nomeProduto = params.get('nome_produto');
const preco = params.get('preco');
const imagem = params.get('imagem');

document.getElementById('nome-produto').textContent = nomeProduto;
document.getElementById('preco').textContent = 'R$' + preco;
document.getElementById('imagem').src = imagem;
document.getElementById('imagem').alt = nomeProduto;

document.title = nomeProduto;