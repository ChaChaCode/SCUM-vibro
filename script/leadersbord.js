var blurryContainer = document.getElementById("blurryContainer");
function closeModal() {
  var modalContent = document.querySelector(".modal-content");
  modalContent.classList.add("close-animation");
  setTimeout(function() {
      modal.style.display = "none";
      blurryContainer.style.display = "none"; // Скрыть контейнер точек
      modalContent.classList.remove("close-animation");
      document.body.style.overflow = ""; // Восстанавливаем скролл основной страницы
  }, 300); // Длительность анимации в мс
}

window.addEventListener('load', function() {
  var blurElements = document.querySelectorAll('.blur');
  blurElements.forEach(function(el) {
      el.style.filter = 'none'; // Убираем размытие после загрузки
  });
});


var monitorBattonContainer = document.getElementById("monitorBattonContainer");
if (monitorBattonContainer) {
  monitorBattonContainer.addEventListener("click", function (e) {
      window.location.href = "./upgrade.html";
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

var groupInfoTextContainer = document.getElementById("groupInfoTextContainer");
if (groupInfoTextContainer) {
  groupInfoTextContainer.addEventListener("click", function (e) {
      window.location.href = "./info.html";
  });
}

var groupInfoTextContainer = document.getElementById("TaskBattonContainer");
if (groupInfoTextContainer) {
  groupInfoTextContainer.addEventListener("click", function (e) {
      window.location.href = "./task.html";
  });
}

