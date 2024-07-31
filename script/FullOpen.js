// app.js
window.Telegram.WebApp.ready();

// Включение подтверждения при закрытии
window.Telegram.WebApp.isClosingConfirmationEnabled = true;

// Запрос доступа на запись
window.Telegram.WebApp.requestWriteAccess().then((result) => {
    if (result) {
        console.log('Доступ на запись предоставлен');
        // Теперь вы можете выполнять действия, требующие доступа на запись
    } else {
        console.log('Доступ на запись не предоставлен');
        // Обработка случая, когда доступ не был предоставлен
    }
}).catch((error) => {
    console.error('Ошибка запроса доступа на запись:', error);
});

window.Telegram.WebApp.onEvent('themeChanged', function() {
    // После того, как WebApp готов, разверните его
    window.Telegram.WebApp.expand();
});

// Разворачиваем WebApp сразу после загрузки
window.Telegram.WebApp.expand();
