// Компонент поля ввода значения прогресса
const valueInput = document.getElementById('value');
// Компонент переключателя состояния Animate
const animateInput = document.getElementById('animation');
// Компонент переключателя состояния Hide
const hideInput = document.getElementById('hide');

//Функция настройки доступности свича Animate
const setAnimateSwitcherState = (value, hide) => {
    animateInput.disabled = hide || value === "0";

    if (hide || value == "0") animateInput.checked = false;
    animateInput.dispatchEvent(new Event('change'));
}
