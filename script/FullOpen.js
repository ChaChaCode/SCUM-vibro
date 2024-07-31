// app.js
window.Telegram.WebApp.ready();

window.Telegram.WebApp.onEvent('themeChanged', function() {
    // После того, как WebApp готов, разверните его
    window.Telegram.WebApp.expand();
    
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, что WebApp загружен
    window.Telegram.WebApp.ready();

    // Включение подтверждения при закрытии
    window.Telegram.WebApp.isClosingConfirmationEnabled = true;

    // Разворачиваем WebApp на весь экран
    window.Telegram.WebApp.expand();
});
