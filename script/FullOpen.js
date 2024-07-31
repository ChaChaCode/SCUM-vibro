document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, что WebApp загружен
    window.Telegram.WebApp.ready();

    // Включение подтверждения при закрытии
    window.Telegram.WebApp.isClosingConfirmationEnabled = true;

    window.Telegram.WebApp.onEvent('themeChanged', function() {
    // После того, как WebApp готов, разверните его
    window.Telegram.WebApp.expand();
        
    // Разворачиваем WebApp на весь экран
    window.Telegram.WebApp.expand();
});
