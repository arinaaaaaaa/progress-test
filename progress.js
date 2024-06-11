const progressBar = document.getElementById('progressCircle')
const valueInput = document.getElementById('value');
const animateInput = document.getElementById('animation');
const hideInput = document.getElementById('hide');

// Функция валидации значения прогресса (от 0 до 100)
function validateProgressValue() {
    let inputValue = valueInput.value || '0';

    // Удаление нулей в начале значения
    if (inputValue.length > 1)
        inputValue = inputValue.replace(/^0+/, '');
    else if (inputValue.length === 0) inputValue = 0;

    // Удаление недопустимых символов (букв, символов, значений, выходящих за допустимый диапозон)
    if (!isFinite(inputValue) || inputValue > 100)
        inputValue = inputValue.slice(0, -1);

    // Блокировка свича Animate, если значение прогресса 0
    if (inputValue === "0") {
        animateInput.checked = false;
        animateInput.dispatchEvent(new Event('change'));
    }

    animateInput.disabled = inputValue === "0" || hideInput.checked;
    valueInput.value = inputValue;
}

//Функция изменения значения прогресса
function updateProgressValue() {
    validateProgressValue();
    const percentage = valueInput.value;

    // Закрашивание области прогресса
    progressBar.style.background = `conic-gradient(#3e4fff ${percentage}%, #e0e0e0 0%)`;
}

valueInput.addEventListener('input', () => updateProgressValue());
updateProgressValue(valueInput.value);

// Изменение анимации при взаимодействии со свичем Animate
animateInput.addEventListener('change', () => {
    progressBar.style.animation = animateInput.checked ? "rotate 3s linear infinite" : "";
});

// Изменение видимости при взаимодействии со свичем Hide
hideInput.addEventListener('change', () => {
    progressBar.style.visibility = hideInput.checked ? "hidden" : "";
    animateInput.disabled = valueInput.value === "0" || hideInput.checked;

    // Блокировка свича Animate, если прогресс бар скрыт
    if (hideInput.checked) {
        animateInput.checked = false;
        animateInput.dispatchEvent(new Event('change'));
    }
});
