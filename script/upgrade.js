function updateModalSize(modalContent) {
    var width = window.innerWidth;
    var scale;
    var bottom;

    if (width <= 360) {
        scale = 0.78;
        bottom = '-65px';
    } else if (width <= 375) {
        scale = 0.82;
        bottom = '-53px';
    } else if (width <= 390) {
        scale = 0.85;
        bottom = '-43px';
    } else if (width <= 412) {
        scale = 0.90;
        bottom = '-30px';
    } else if (width <= 414) {
        scale = 0.90;
        bottom = '-10px';
    } else if (width <= 430) {
        scale = 0.94;
        bottom = '-17px';
    } else if (width <= 450) {
        scale = 0.95;
        bottom = '-15px';
    } else {
        scale = 1;
        bottom = '0';
    }

    modalContent.style.transform = 'translateX(-50%) scale(' + scale + ')';
    modalContent.style.bottom = bottom;
}

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    var modalContent = modal.querySelector(".modal-content");

    if (modal) {
        modal.style.display = "block";
        gsap.fromTo(modal, 
            { opacity: 0 }, 
            { opacity: 1, duration: 0.3 }
        );
        gsap.fromTo(modalContent, 
            { opacity: 0, y: 500 }, 
            { opacity: 1, y: 0, duration: 0.3, ease: 'power3.inOut' }
        );
    }
    updateModalSize(modalContent);
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    var modalContent = modal.querySelector(".modal-content");

    if (modal) {
        gsap.to(modalContent, 
            { opacity: 0, y: 500, duration: 0.3, ease: 'power3.inOut', onComplete: function() {
                modal.style.display = "none";
            } }
        );
        gsap.to(modal, 
            { opacity: 0, duration: 0.3 }
        );
    }
    updateModalSize(modalContent);  
}

// Привязка обработчиков событий
document.getElementById("multitapGroupContainer").onclick = function() {
    openModal("multitapModal");
}

document.getElementById("energyGroupContainer").onclick = function() {
    openModal("energyModal");
}

document.getElementById("tapbotGroupContainer").onclick = function() {
    openModal("tapbotModal");
}

document.getElementById("multitapClose").onclick = function() {
    closeModal("multitapModal");
}

document.getElementById("energyClose").onclick = function() {
    closeModal("energyModal");
}

document.getElementById("tapbotClose").onclick = function() {
    closeModal("tapbotModal");
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal(event.target.id);
    }
}

window.addEventListener('touchend', function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal(event.target.id);
    }
});

window.addEventListener('load', function() {
    var blurElements = document.querySelectorAll('.blur');
    blurElements.forEach(function(el) {
        el.style.filter = 'none'; // Убираем размытие после загрузки
    });

        // Проверка и установка поддержки вибрации
        if (Telegram.WebApp.HapticFeedback) {
            function handleButtonClick(url) {
                return function (e) {
                    e.preventDefault();
                    // Запуск вибрации
                    Telegram.WebApp.HapticFeedback.impactOccurred('medium');
                    // Переход по ссылке
                    window.location.href = url;
                };
            }
        
            function setupButton(id, url) {
                var button = document.getElementById(id);
                if (button) {
                    button.addEventListener("click", handleButtonClick(url));
                }
            }
        
            setupButton("faceBattonContainer", "./invite.html");
            setupButton("groupInfoTextContainer", "./info.html");
            setupButton("TaskBattonContainer", "./task.html");
            setupButton("TopStarsBattonContainer", "./leadersbord.html");
            setupButton("rukaBattonContainer", "./index.html");
        
        }
});
