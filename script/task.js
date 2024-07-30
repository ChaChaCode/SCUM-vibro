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

var monitorBattonContainer = document.getElementById("monitorBattonContainer");
if (monitorBattonContainer) {
  monitorBattonContainer.addEventListener("click", function (e) {
      window.location.href = "./upgrade.html";
  });
}
var groupInfoTextContainer = document.getElementById("TopStarsBattonContainer");
if (groupInfoTextContainer) {
  groupInfoTextContainer.addEventListener("click", function (e) {
      window.location.href = "./leadersbord.html";
  });
}


document.addEventListener("DOMContentLoaded", function() {
  const scrollingBlock = document.getElementById("scrollingBlock");
  let scrollAmount = 0;
  const scrollStep = 0.5; // Шаг для плавной прокрутки
  const resumeDelay = 30; // Задержка для возобновления авто-прокрутки (в миллисекундах)
  let isScrolling = false;
  let isUserScrolling = false;
  let scrollTimeout;

  function startScrolling() {
    if (isScrolling || isUserScrolling) return;

    isScrolling = true;
    scrollAmount = scrollingBlock.scrollLeft;
    scrollContent();
  }

  function stopScrolling() {
    isScrolling = false;
  }

  function scrollContent() {
    if (!isScrolling) return;

    // Проверка направления прокрутки и изменение scrollAmount
    if (scrollingBlock.scrollLeft === 0 && scrollStep < 0) {
      scrollAmount = scrollingBlock.scrollWidth - scrollingBlock.clientWidth;
    } else if (scrollingBlock.scrollLeft >= scrollingBlock.scrollWidth - scrollingBlock.clientWidth && scrollStep > 0) {
      scrollAmount = 0;
    } else {
      scrollAmount += scrollStep;
    }

    scrollingBlock.scrollLeft = scrollAmount;

    requestAnimationFrame(scrollContent);
  }

  function handleUserScroll() {
    if (isScrolling) {
      stopScrolling();
      isUserScrolling = true;
      clearTimeout(scrollTimeout); // Очистка предыдущего таймера, если есть
      scrollTimeout = setTimeout(() => {
        isUserScrolling = false;
        startScrolling();
      }, resumeDelay); // Запуск таймера для возобновления автопрокрутки
    }
  }

  scrollingBlock.addEventListener('scroll', handleUserScroll);

  scrollingBlock.addEventListener('mouseenter', stopScrolling);
  scrollingBlock.addEventListener('mouseleave', () => {
    if (!isUserScrolling) {
      startScrolling();
    }
  });

  // Запуск автопрокрутки сразу после загрузки
  startScrolling();
});
