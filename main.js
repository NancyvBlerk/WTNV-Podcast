var imageCrate = document.querySelectorAll('.trip-image');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

for (i = 0; i < imageCrate.length; i++) {
    imageCrate[i].addEventListener('click', openModal);
}

/*imageCrate[0].addEventListener('click', openModal);
imageCrate[1].addEventListener('click', openModal);*/

/*imageCrate.onclick = openModal;*/
backdrop.addEventListener('click', closeModal);
