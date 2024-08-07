document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, что WebApp загружен
    window.Telegram.WebApp.ready();

    // Включение подтверждения при закрытии
    window.Telegram.WebApp.enableClosingConfirmation();

    // Разворачиваем WebApp на весь экран
    window.Telegram.WebApp.expand();

    // Функция для установки цвета заголовка в зависимости от фона приложения
    function setHeaderColor() {
        // Предполагаем, что цвет фона установлен для элемента с id 'app-background'
        var appBackgroundColor = window.getComputedStyle(document.getElementById('app-background')).backgroundColor;
        // Устанавливаем цвет заголовка
        window.Telegram.WebApp.setHeaderColor('bg_color', appBackgroundColor);
    }

    // Устанавливаем цвет заголовка при загрузке страницы
    setHeaderColor();

    // Подписка на событие themeChanged
    window.Telegram.WebApp.onEvent('themeChanged', function() {
        // Обработка изменения темы
        window.Telegram.WebApp.expand();
        // Обновляем цвет заголовка при изменении темы
        setHeaderColor();
    });
});
