document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navBar = document.getElementById("nav-bar");

    // Слушатель события для открытия/закрытия навигации
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("active"); // Анимация бургер-иконки
        navBar.classList.toggle("active"); // Показать/скрыть меню
    });
});
document.getElementById('skinTypeQuiz').addEventListener('submit', function(event) {
    event.preventDefault();
    const acneValue = document.querySelector('input[name="acne"]:checked').value;

    let result = '';
    if (acneValue === 'rarely') {
      result = 'Ваша кожа нормальная. Рекомендуем использовать легкие увлажняющие кремы.';
    } else if (acneValue === 'sometimes') {
      result = 'Ваша кожа скорее сухая. Рекомендуем использовать увлажняющие средства.';
    } else if (acneValue === 'frequently') {
      result = 'Ваша кожа жирная. Рекомендуем использовать очищающие средства и матирующие кремы.';
    }

    alert(result);
  });

  // Тест "Идеальный цвет волос"
document.getElementById('hairColorQuiz').addEventListener('submit', function(event) {
    event.preventDefault();
    const wardrobeColor = document.querySelector('input[name="wardrobeColor"]:checked').value;

    let result = '';
    if (wardrobeColor === 'warm') {
        result = 'Вам подойдут теплые оттенки, такие как медовый блонд или каштан.';
    } else if (wardrobeColor === 'cool') {
        result = 'Попробуйте холодные тона, например, пепельный блонд или платиновый.';
    } else if (wardrobeColor === 'neutral') {
        result = 'Классические цвета, как шоколадный или черный, будут отлично смотреться.';
    }

    alert(result);
});

// Тест "Ваша идеальная стрижка"
document.getElementById('haircutQuiz').addEventListener('submit', function(event) {
    event.preventDefault();
    const faceShape = document.querySelector('input[name="faceShape"]:checked').value;

    let result = '';
    if (faceShape === 'round') {
        result = 'Каскадные стрижки и длинные волосы вытянут круглое лицо.';
    } else if (faceShape === 'oval') {
        result = 'Вам подойдут любые стрижки, включая ультракороткие.';
    } else if (faceShape === 'square') {
        result = 'Асимметричные стрижки и мягкие локоны смягчат черты лица.';
    } else if (faceShape === 'heart') {
        result = 'Косая челка и объем в нижней части уравновесят пропорции.';
    }

    alert(result);
});

// Тест "Ваш идеальный маникюр"
document.getElementById('nailQuiz').addEventListener('submit', function(event) {
    event.preventDefault();
    const nailStyle = document.querySelector('input[name="nailStyle"]:checked').value;

    let result = '';
    if (nailStyle === 'classic') {
        result = 'Классический маникюр с френчем или однотонным покрытием для вас.';
    } else if (nailStyle === 'bright') {
        result = 'Попробуйте яркий дизайн с геометрией или глиттером.';
    } else if (nailStyle === 'minimal') {
        result = 'Минималистичный маникюр с нежными акцентами идеально подойдет.';
    }

    alert(result);
});

