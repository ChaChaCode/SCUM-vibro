// app.js
window.Telegram.WebApp.ready();

// Включение подтверждения при закрытии
window.Telegram.WebApp.isClosingConfirmationEnabled = true;

window.Telegram.WebApp.onEvent('themeChanged', function() {
    // После того, как WebApp готов, разверните его
    window.Telegram.WebApp.expand();
});

// Разворачиваем WebApp сразу после загрузки
window.Telegram.WebApp.expand();
