/* Runs before first paint so a saved theme choice never flashes the wrong colours. */
(function () {
  var root = document.documentElement;
  root.classList.add("js");
  try {
    var saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) { /* storage blocked: follow the system setting */ }
})();
