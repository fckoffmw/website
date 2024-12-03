function toggleDetails(button) {
    const card = button.parentElement; // Находим текущую карточку
    const details = card.querySelector('.details'); // Находим текст details в этой карточке

    if (details.style.display === 'block') {
        details.style.display = 'none'; // Скрыть текст
        card.classList.remove('active'); // Убрать активный стиль
    } else {
        details.style.display = 'block'; // Показать текст
        card.classList.add('active'); // Добавить активный стиль
    }
}
function scrollGallery(direction) {
    const gallery = document.querySelector('.horizontal-gallery');
    const scrollAmount = 300; // Количество пикселей для прокрутки
    gallery.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

// Получаем все кнопки "Читать далее"
const readMoreButtons = document.querySelectorAll('.read-more');

// Обработчик клика для каждой кнопки
readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Находим родительский элемент для текущей кнопки
        const trendItem = this.closest('.trend-item');
        // Переключаем класс "active" для блока, чтобы показать скрытый текст
        trendItem.classList.toggle('active');
        
        // Изменяем текст кнопки
        if (trendItem.classList.contains('active')) {
            this.textContent = 'Скрыть';
        } else {
            this.textContent = 'Читать далее';
        }
    });
});
// Получаем элементы формы и блока для отзывов
const reviewForm = document.getElementById('review-form');
const reviewsList = document.getElementById('reviews-list');

// Обработчик отправки формы
reviewForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвращаем стандартное отправление формы

    // Получаем данные из формы
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('review').value;

    // Создаем новый элемент для отзыва
    const newReview = document.createElement('div');
    newReview.classList.add('review-item');
    newReview.innerHTML = `<strong>${name}</strong> (${rating}): ${reviewText}`;

    // Добавляем новый отзыв в список
    reviewsList.appendChild(newReview);

    // Очищаем форму
    reviewForm.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navBar = document.getElementById("nav-bar");

    // Слушатель события для открытия/закрытия навигации
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("active"); // Анимация бургер-иконки
        navBar.classList.toggle("active"); // Показать/скрыть меню
    });
});


