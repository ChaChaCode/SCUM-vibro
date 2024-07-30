document.addEventListener('DOMContentLoaded', function() {
    const tapTextElement = document.getElementById('tapText');
    const coinElement = document.querySelector('.mycoin');
    const energyText = document.getElementById('energyText');
    const currentRankElement = document.getElementById('currentRank');
    const nextRankElement = document.getElementById('nextRank');
    const yourLevelLine = document.querySelector('.yourlevelline');
    const groupLine = document.querySelector('.groupline');
    const percentageText = document.querySelector('.percentage-text');
    const tapCodeElement = document.getElementById('tapCode');
    const rankUpNotification = document.getElementById('rankUpNotification');
    const rankNameElement = document.getElementById('rankName');
    const rankRewardElement = document.getElementById('rankReward');
    const coinValuePerSymbol = 0.000001;
    const maxEnergy = 500;
    const energyPerTap = 1;
    let currentCoinValue = 0;
    let currentSymbolIndex = 0;
    let tapCodeText = '';
    let currentEnergy = maxEnergy;
    let energyRestoreInterval;
    let brightness = 0.3; // Начальная яркость
    let brightnessTimeout;

    const ranks = [
        { name: 'GURU', min: 22.280000, reward: 2.280000 },
        { name: 'TEAM LEAD', min: 15.000000, reward: 1.337000 },
        { name: 'HACKER', min: 12.000000, reward: 1.500000 },
        { name: 'SCAMMER', min: 6.666666, reward: 1.000000 },
        { name: 'SENIOR', min: 3.000000, reward: 0.777000 },
        { name: 'MIDLE', min: 1.000000, reward: 0.250000 },
        { name: 'JUNIOR', min: 0.100000, reward: 0.100000 },
        { name: 'CODER', min: 0.005000, reward: 0.015000 },
        { name: 'BEGINNER', min: 0.000000, reward: 0.000050 }
    ];

    let bonusesReceived = {};
    ranks.forEach(rank => bonusesReceived[rank.name] = false);

    function removeTapText() {
        tapTextElement.textContent = '';
        document.removeEventListener('touchstart', removeTapText);
    }

    if (tapTextElement) {
        document.addEventListener('touchstart', removeTapText, { once: true });
    }

    function updatePercentage() {
        const rank = getRank(currentCoinValue);
        const nextRankIndex = ranks.indexOf(rank) - 1;
        if (nextRankIndex >= 0) {
            const nextRankMin = ranks[nextRankIndex].min;
            const percentage = ((currentCoinValue - rank.min) / (nextRankMin - rank.min)) * 100;
            yourLevelLine.style.width = `${percentage}%`;
            groupLine.style.width = `${percentage}%`;
            percentageText.textContent = `${Math.round(percentage)}%`;
        } else {
            yourLevelLine.style.width = '100%';
            groupLine.style.width = '100%';
            percentageText.textContent = '100%';
        }
    }

    function updateEnergy() {
        energyText.textContent = `${currentEnergy}/${maxEnergy}`;
    }

    function restoreEnergy() {
        if (currentEnergy < maxEnergy) {
            currentEnergy++;
            updateEnergy();
        }
    }

    function processText() {
        while (currentSymbolIndex < tapCodeText.length) {
            if (tapCodeText[currentSymbolIndex] === ' ') {
                tapTextElement.textContent += ' ';
                currentSymbolIndex++;
            } else if (tapCodeText[currentSymbolIndex] === '█') {
                tapTextElement.textContent += '█';
                currentSymbolIndex++;
            } else {
                break;
            }
        }

        if (currentSymbolIndex < tapCodeText.length) {
            if (tapCodeText[currentSymbolIndex] !== ' ' && tapCodeText[currentSymbolIndex] !== '█') {
                tapTextElement.textContent += tapCodeText[currentSymbolIndex];
                currentSymbolIndex++;
                currentCoinValue += coinValuePerSymbol;
                coinElement.textContent = currentCoinValue.toFixed(6);
                currentEnergy -= energyPerTap;
                if (currentEnergy < 0) {
                    currentEnergy = 0;
                }
                updateEnergy();
                updateRanks();
                updatePercentage();
                scrollToBottom();
            }
        }

        if (currentSymbolIndex >= tapCodeText.length) {
            tapCodeText = getTapCodeText();
            currentSymbolIndex = 0;
            tapTextElement.textContent = '';
        }
    }

    function handleTap(event) {
        event.preventDefault();
        if (currentEnergy > 0) {
            processText();
            if (navigator.vibrate) {
                navigator.vibrate(50); // Вибрация длится 50 миллисекунд
            }

            // Увеличиваем яркость при каждом клике
            brightness += 0.1;
            if (brightness > 1) brightness = 1; // Ограничение максимальной яркости
            tapTextElement.style.boxShadow = `0 0 24px rgba(0, 255, 148, ${brightness})`;

            // Устанавливаем таймаут для уменьшения яркости после прекращения кликов
            clearTimeout(brightnessTimeout);
            brightnessTimeout = setTimeout(() => {
                fadeBrightness();
            }, 300);
        }
    }

    function fadeBrightness() {
        const fadeInterval = setInterval(() => {
            brightness -= 0.05;
            if (brightness <= 0.3) {
                brightness = 0.3;
                clearInterval(fadeInterval);
            }
            tapTextElement.style.boxShadow = `0 0 24px rgba(0, 255, 148, ${brightness})`;
        }, 30); // Интервал изменения яркости
    }

    function getRank(coinValue) {
        for (let i = 0; i < ranks.length; i++) {
            if (coinValue >= ranks[i].min) {
                if (!bonusesReceived[ranks[i].name]) {
                    bonusesReceived[ranks[i].name] = true;
                    currentCoinValue += ranks[i].reward;
                    coinElement.textContent = currentCoinValue.toFixed(6);
                }
                return ranks[i];
            }
        }
        return ranks[ranks.length - 1];
    }

    function showRankUpNotification(rankName, rankReward) {
        rankNameElement.textContent = rankName;
        rankRewardElement.textContent = rankReward.toFixed(6);

        // Показываем уведомление
        rankUpNotification.classList.remove('hidden');
        rankUpNotification.classList.remove('hide');
        rankUpNotification.classList.add('show');

        // Через 3 секунды начинаем анимацию скрытия
        setTimeout(() => {
            rankUpNotification.classList.remove('show');
            rankUpNotification.classList.add('hide');
        }, 5000); // Задержка перед скрытием уведомления
    }

    function updateRanks() {
        const previousRank = getRank(currentCoinValue - coinValuePerSymbol);
        const rank = getRank(currentCoinValue);
        currentRankElement.textContent = rank.name;

        const nextRankIndex = ranks.indexOf(rank) - 1;
        if (nextRankIndex >= 0) {
            nextRankElement.textContent = ranks[nextRankIndex].name;
        } else {
            nextRankElement.textContent = 'MAX';
        }

        // Проверка на новый ранг
        if (previousRank.name !== rank.name) {
            showRankUpNotification(rank.name, rank.reward);
            highlightGroupCodePercent();
        }
    }

    function scrollToBottom() {
        tapTextElement.scrollTop = tapTextElement.scrollHeight;
    }

    tapTextElement.addEventListener('touchstart', handleTap);

    const script = document.createElement('script');
    script.src = './script/tapcode.js';
    script.onload = function() {
        tapCodeText = getTapCodeText();
        tapCodeElement.textContent = tapCodeText;
    };
    document.head.appendChild(script);

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

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        blurryContainer.style.display = "block";
        updateModalSize(modalContent);
    }

    function closeModal(modal) {
        var modalContent = modal.querySelector(".modal-content");
        modalContent.classList.add("close-animation");
        setTimeout(function() {
            modal.style.display = "none";
            blurryContainer.style.display = "none";
            modalContent.classList.remove("close-animation");
            document.body.style.overflow = "";
        }, 300);
    }

    var modal1 = document.getElementById("myModal");
    var modal2 = document.getElementById("boosting");
    var blurryContainer = document.getElementById("blurryContainer");

    var buttons = [
        { buttonId: "levelbuttonContainer", modalId: "myModal" },
        { buttonId: "boostingButton", modalId: "boosting" }
    ];

    buttons.forEach(function(entry) {
        var btn = document.getElementById(entry.buttonId);
        btn.onclick = function() {
            openModal(entry.modalId);
        };
    });

    document.querySelectorAll(".modal").forEach(function(modal) {
        var span = modal.querySelector(".close");
        span.onclick = function() {
            closeModal(modal);
        };
        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

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

    var taskBattonContainer = document.getElementById("TaskBattonContainer");
    if (taskBattonContainer) {
      taskBattonContainer.addEventListener("click", function (e) {
          window.location.href = "./task.html";
      });
    }

    var topStarsButtonContainer = document.getElementById("TopStarsBattonContainer");
    if (topStarsButtonContainer) {
        topStarsButtonContainer.addEventListener("click", function (e) {
            window.location.href = "./leadersbord.html";
        });
    }

    energyRestoreInterval = setInterval(restoreEnergy, 2000);
    updateEnergy();
    updateRanks();
    updatePercentage();
});
