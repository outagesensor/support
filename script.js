document.querySelectorAll(".faq-question").forEach(function (button) {
  var answer = button.nextElementSibling;

  button.addEventListener("click", function () {
    var isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    answer.style.maxHeight = isOpen ? null : answer.scrollHeight + "px";
  });
});
