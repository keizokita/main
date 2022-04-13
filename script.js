//onclick(() => {
//        window.location.href = "resultado.html";
//    });
//newFunction();

const myForm = window.location.search;
console.log(myForm);

const urlParams = new URLSearchParams(myForm);

const nome = urlParams.get('nome')
console.log(nome);

const email = urlParams.get('email')
console.log(email);

const senha = urlParams.get('senha')
console.log(senha);

const idade = urlParams.get('idade')
console.log(idade);

const genero = urlParams.get('genero')
console.log(genero);

const futebol = urlParams.get('futebol')
console.log(futebol);

const pipa = urlParams.get('pipa')
console.log(pipa);

const game = urlParams.get('game')
console.log(game);

const tiposanguineo = urlParams.get('tipo-sanguineo')
console.log(tiposanguineo);

const sobrevc = urlParams.get('sobre-vc')
console.log(sobrevc);

var url_string = "file:///C:/Users/Keizo/Documents/projeto-web/html-css/main/resultado.html?nome=Keizo&email=keizokita1%40gmail.com&senha=123&idade=18&genero=masculino&game=game&tipo-sanguineo=AB&sobre-vc=sobre+keizo"; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("c");
console.log(c);

const element = document.getElementsByClassName("cadastro-body");

let elements = document.getElementsByName("nome");
document.getElementById("conteudo-result").innerHTML = nome; 