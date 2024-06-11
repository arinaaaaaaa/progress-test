// Функция валидации значения прогресса (от 0 до 100)
function validateProgressValue() {
    let inputField = document.getElementById('progressValue');
    let inputValue = inputField.value || '0';

    // Удаление нулей в начале значения
    if (inputValue.length > 1)
        inputValue = inputValue.replace(/^0+/, '');

    // Удаление недопустимых символов (букв, символов, значений, выходящих за допустимый диапозон)
    if (!isFinite(inputValue) || inputValue > 100)
        inputValue = inputValue.length === 0 ? 0 : inputValue.slice(0, -1);

    inputField.value = inputValue;
}

//Функция изменения значения прогресса
function updateProgressValue() {
    const circle = document.getElementById('progressCircle');
    validateProgressValue();
    const percentage = document.getElementById('progressValue').value;

    // Закрашивание области прогресса
    circle.style.background = `conic-gradient(#3e4fff ${percentage}%, #e0e0e0 ${percentage}%)`;
}

document.getElementById('progressValue').addEventListener('input', function(e) {
    updateProgressValue();
});

updateProgressValue(document.getElementById('progressValue').value);
