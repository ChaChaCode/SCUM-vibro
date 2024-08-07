document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, что WebApp загружен
    window.Telegram.WebApp.ready();

    // Включение подтверждения при закрытии
    window.Telegram.WebApp.enableClosingConfirmation();

    // Разворачиваем WebApp на весь экран
    window.Telegram.WebApp.expand();

    // Функция для установки цвета заголовка
    function setHeaderColor() {
        // Получаем цвет заголовка из CSS переменной
        var headerBgColor = getComputedStyle(document.documentElement).getPropertyValue('--tg-theme-header-bg-color').trim();
        // Устанавливаем цвет заголовка
        window.Telegram.WebApp.setHeaderColor('bg_color', headerBgColor);
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
