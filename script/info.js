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