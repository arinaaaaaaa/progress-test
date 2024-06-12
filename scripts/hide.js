// Функция настройки видимости прогресса
function setVisibility(value) {
    const progressBar = document.getElementById('progressCircle');
    progressBar.style.visibility = value ? "hidden" : "";

    // Обновление состояния элементов управления анимацией
    if (animateInput) {
        setAnimateSwitcherState(valueInput.value, value)
    }
}

// Инициализация значения видимости при запуске
hideInput?.addEventListener('change', (e) => {
    setVisibility(e.target.checked)
});
