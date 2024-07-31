document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, что WebApp загружен
    window.Telegram.WebApp.ready();

    // Включение подтверждения при закрытии
    window.Telegram.WebApp.enableClosingConfirmation();

    // Разворачиваем WebApp на весь экран
    window.Telegram.WebApp.expand();

    // Подписка на событие themeChanged, если это необходимо
    window.Telegram.WebApp.onEvent('themeChanged', function() {
        // Обработка изменения темы, если нужно
    });
});
