let open = document.querySelector('.buttonperfil');
let menu = document.querySelector('.minimenu');

open.addEventListener('click', function() {
    minimenu.style.display = 'none';
});

close.addEventListener('click', function() {
    minimenu.style.display = 'block';
});