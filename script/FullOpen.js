document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, что WebApp загружен
    window.Telegram.WebApp.ready();

    // Включение подтверждения при закрытии
    window.Telegram.WebApp.enableClosingConfirmation();

    // Разворачиваем WebApp на весь экран
    window.Telegram.WebApp.expand();

    // Устанавливаем цвет фона заголовка
    window.Telegram.WebApp.setHeaderColor('bg_color', '#ff5733'); // Замените '#ff5733' на нужный вам цвет

    // Подписка на событие themeChanged
    window.Telegram.WebApp.onEvent('themeChanged', function() {
        // Обработка изменения темы, если нужно
        // Например, можно повторно развернуть WebApp на весь экран
        window.Telegram.WebApp.expand();

        // Можно также обновить цвет заголовка при изменении темы, если нужно
        window.Telegram.WebApp.setHeaderColor('bg_color', '#ff5733'); // Замените '#ff5733' на нужный вам цвет
    });
});
