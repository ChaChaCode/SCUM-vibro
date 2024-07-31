// app.js
window.Telegram.WebApp.ready();

window.Telegram.WebApp.onEvent('themeChanged', function() {
    // После того, как WebApp готов, разверните его
    window.Telegram.WebApp.expand();
});

// Вы также можете вызвать expand() сразу после того, как приложение загрузилось
window.Telegram.WebApp.expand();
