
    // Получаем элементы корзины
    const cartContent = document.getElementById('cart-content');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Кнопки "Добавить в корзину"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Хранилище товаров в корзине
    const cart = [];

    // Обновление содержимого корзины
    function updateCart() {
        // Очистка списка товаров в корзине
        cartItemsList.innerHTML = '';

        if (cart.length === 0) {
            cartContent.querySelector('p').style.display = 'block';
            totalPriceElement.textContent = '0';
        } else {
            cartContent.querySelector('p').style.display = 'none';
            let totalPrice = 0;

            cart.forEach((item, index) => {
                // Создаем элемент списка для каждого товара
                const listItem = document.createElement('li');
                listItem.classList.add('cart-item');

                listItem.innerHTML = `
                    ${item.name} - ${item.price} ₽
                    <button class="remove-item" data-index="${index}">Удалить</button>
                `;
                cartItemsList.appendChild(listItem);

                totalPrice += item.price;
            });

            // Обновляем итоговую стоимость
            totalPriceElement.textContent = totalPrice;

            // Добавляем обработчики удаления для кнопок
            const removeButtons = document.querySelectorAll('.remove-item');
            removeButtons.forEach((btn) => {
                btn.addEventListener('click', (event) => {
                    const index = event.target.dataset.index;
                    removeItem(index);
                });
            });
        }
    }

    // Функция удаления товара по индексу
    function removeItem(index) {
        cart.splice(index, 1);
        updateCart();
    }

    // Функция очистки корзины
    function clearCart() {
        cart.length = 0;
        updateCart();
    }

    // Обработчик для кнопок "Добавить в корзину"
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.service-card');
            const name = card.querySelector('h3').textContent;
            const price = parseInt(card.dataset.price, 10);

            // Добавляем товар в корзину
            cart.push({ name, price });
            updateCart();
        });
    });

    // Добавляем кнопку "Очистить корзину"
    const clearCartButton = document.createElement('button');
    clearCartButton.textContent = 'Очистить корзину';
    clearCartButton.style.marginTop = '10px';
    clearCartButton.style.cursor = 'pointer';

    clearCartButton.addEventListener('click', clearCart);

    cartContent.appendChild(clearCartButton);
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('open');
        });
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
    
    