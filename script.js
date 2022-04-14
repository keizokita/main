const urlParams = new URLSearchParams(window.location.search);

console.log(urlParams);

const nomeParam = urlParams.get("nome");
console.log(nomeParam);

const emailParam = urlParams.get("email");
console.log(emailParam);

const senhaParam = urlParams.get("senha");
console.log(senhaParam);

const idadeParam = urlParams.get("idade");
console.log(idadeParam);

const generoParam = urlParams.get("genero");
console.log(generoParam);

const futebolParam = urlParams.get("futebol");
console.log(futebolParam);

const pipaParam = urlParams.get("pipa");
console.log(pipaParam);

const gameParam = urlParams.get("game");
console.log(gameParam);

const sangueParam = urlParams.get("sangue");
console.log(sangueParam);

const sobreParam = urlParams.get("sobre-vc");
console.log(sobreParam);







// const myForm = window.location.search;
// console.log(myForm);

// const urlParams = new URLSearchParams(myForm);

// const nome = urlParams.get('nome')
// console.log(nome);

// const email = urlParams.get('email')
// console.log(email);

// const senha = urlParams.get('senha')
// console.log(senha);

// const idade = urlParams.get('idade')
// console.log(idade);

// const genero = urlParams.get('genero')
// console.log(genero);

// const futebol = urlParams.get('futebol')
// console.log(futebol);

// const pipa = urlParams.get('pipa')
// console.log(pipa);

// const game = urlParams.get('game')
// console.log(game);

// const tiposanguineo = urlParams.get('tipo-sanguineo')
// console.log(tiposanguineo);

// const sobrevc = urlParams.get('sobre-vc')
// console.log(sobrevc); 


// var url_string = "resultado.html?nome=Keizo&email=keizo%40email&senha=123&idade=18&genero=masculino&game=game&tipo-sanguineo=B&sobre-vc=sobre+keizo";

// function aparecer() {
//     var nome = document.querySelector('nome')
//     var email = document.querySelector('email')
//     var senha = document.querySelector('senha')
//     var idade = document.querySelector('idade')
//     var genero = document.querySelector('genero')
//     var hobbies = document.querySelector('hobbies')
//     var sangue = document.querySelector('tipo-sanguineo')
//     var fale = document.querySelector('sobre-vc')

//     .nome.innerHTML = $nome
//}

// function getUrlParameters(parameter, staticURL, decode){
//     /*
//      Function: getUrlParameters
//      Descrição: Obtem o valor dos parâmetros da URL atual ou URL estática
//      Author: Tirumal
//      URL: www.code-tricks.com
//     */
//     var currLocation = (staticURL.length)? staticURL : window.location.search,
//         parArr = currLocation.split("?")[1].split("&"),
//         returnBool = true;
 
//     for(var i = 0; i < parArr.length; i++){
//          parr = parArr[i].split("=");
//          if(parr[0] == parameter){
//              return (decode) ? decodeURIComponent(parr[1]) : parr[1];
//              returnBool = true;
//          }else{
//              returnBool = false;            
//          }
//     }
 
//     if(!returnBool) return false;  
//  }