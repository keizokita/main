onclick(() => {
        window.location.href = "resultado.html";
    });
newFunction();

var url_resultado = 'resultado.html';
document.querySelector('.btn_submit').href = url_resultado;

<form method="GET" action="resultado.html">
    <>
    <input type="text" name="Nome"></input>
    <input type="text" name="e-mail"></input>
    <input type="password" name="senha"></input>
    <input type="number" name="idade"></input>
    <input type="radio" name="genero"></input>
    <input type="checkbox"></input>
    <select name="tipo-sanguineo"></select>
    <textarea name="sobre-vc"></textarea>
    </>

</form>;


