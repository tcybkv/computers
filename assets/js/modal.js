const modal = document.getElementById('modal');
const openModal = document.getElementById('open__modal');
const closeModal = document.getElementById('close__modal');

openModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.classList.add('no-scroll');
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll');
});

// Закрытие модального окна по клику вне его
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }
});
