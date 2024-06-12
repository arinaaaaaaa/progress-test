// Функция валидации значения прогресса
function validateProgressValue(value) {
    // Удаление ведущих нулей и проверка на максимальное значение
    if (value.length > 1)
        value = value.replace(/^0+/, '');

    if (!isFinite(value) || value > 100)
        value = value.slice(0, -1);

    if (value.length === 0) value = 0;
    //Обновление значения в поле ввода прогресса
    if (valueInput) valueInput.value = value;

    // Обновление состояния элементов управления анимацией
    if (animateInput) {
        setAnimateSwitcherState(value, hideInput.checked)
    }
}

// Функция обновления состояние прогресса
function updateProgressValue(value, valueInput, animateInput, hideInput) {
    const progressBar = document.getElementById('progressCircle');

    validateProgressValue(value || "0", valueInput, animateInput, hideInput);
    progressBar.style.background = `conic-gradient(#3e4fff ${value}%, #e0e0e0 0%)`;
}

// Инициализация значения прогресса при запуске
valueInput?.addEventListener('input', (e) => updateProgressValue(e.target.value, valueInput, animateInput, hideInput));
updateProgressValue(valueInput?.value, valueInput, animateInput, hideInput);
