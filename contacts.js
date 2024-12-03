document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navBar = document.getElementById("nav-bar");

    // Слушатель события для открытия/закрытия навигации
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("active"); // Анимация бургер-иконки
        navBar.classList.toggle("active"); // Показать/скрыть меню
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Контейнер для карты
    const mapContainer = document.getElementById("yandex-map");
    if (mapContainer) {
        // Добавляем скрипт карты в контейнер
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.charset = "utf-8";
        script.async = true;
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acc3d635b599d0c91abd2b91bbaa9b6e1264b76f41956aa63c967722c0a42e20f&amp;width=699&amp;height=502&amp;lang=ru_RU&amp;scroll=true";
        mapContainer.appendChild(script);
    }
});






