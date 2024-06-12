// Функция добавления/удаления анимации прогресса
function setAnimation(value) {
    const progressBar = document.getElementById('progressCircle');
    progressBar.style.animation = value ? "rotate 3s linear infinite" : "";
}

// Изменение анимации при взаимодействии со свичем Animate
animateInput?.addEventListener('change', (e) => {
    setAnimation(e.target.checked);
});
