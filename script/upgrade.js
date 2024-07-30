var groupInfoTextContainer = document.getElementById("groupInfoTextContainer");
if (groupInfoTextContainer) {
  groupInfoTextContainer.addEventListener("click", function (e) {
    window.location.href = "./info.html";
  });
}
var rukaBattonContainer = document.getElementById("rukaBattonContainer");
if (rukaBattonContainer) {
  rukaBattonContainer.addEventListener("click", function (e) {
    window.location.href = "./index.html";
  });
}

var faceBattonContainer = document.getElementById("faceBattonContainer");
if (faceBattonContainer) {
  faceBattonContainer.addEventListener("click", function (e) {
    window.location.href = "./invite.html";
  });
}

function updateModalSize() {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        var modalContent = modal.querySelector(".modal-content");
        if (modalContent) {
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
    });
}

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        updateModalSize(); // Обновляем размер модального окна при открытии
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    var modalContent = modal.querySelector(".modal-content");
    if (modal) {
        modalContent.classList.add("close-animation");
        setTimeout(function() {
            modal.style.display = "none";
            modalContent.classList.remove("close-animation");
        }, 300); // Длительность анимации в мс
    }
}

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

window.addEventListener('resize', function() {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (modal.style.display === "block") {
            updateModalSize(); // Обновляем размер при изменении размера окна
        }
    });
});

window.addEventListener('load', function() {
    var blurElements = document.querySelectorAll('.blur');
    blurElements.forEach(function(el) {
        el.style.filter = 'none'; // Убираем размытие после загрузки
    });
});

var groupInfoTextContainer = document.getElementById("groupInfoTextContainer");
if (groupInfoTextContainer) {
    groupInfoTextContainer.addEventListener("click", function (e) {
        window.location.href = "./info.html";
    });
}

var rukaBattonContainer = document.getElementById("rukaBattonContainer");
if (rukaBattonContainer) {
    rukaBattonContainer.addEventListener("click", function (e) {
        window.location.href = "./index.html";
    });
}

var faceBattonContainer = document.getElementById("faceBattonContainer");
if (faceBattonContainer) {
    faceBattonContainer.addEventListener("click", function (e) {
        window.location.href = "./invite.html";
    });
}

var groupInfoTextContainer = document.getElementById("TaskBattonContainer");
if (groupInfoTextContainer) {
  groupInfoTextContainer.addEventListener("click", function (e) {
      window.location.href = "./task.html";
  });
}
var groupInfoTextContainer = document.getElementById("TopStarsBattonContainer");
if (groupInfoTextContainer) {
  groupInfoTextContainer.addEventListener("click", function (e) {
      window.location.href = "./leadersbord.html";
  });
}