/* Google Analytics 4, kept out of the HTML so the Content Security Policy can block inline scripts.
   Skipped for visitors who send Global Privacy Control or Do Not Track.
   To remove analytics entirely: delete this file and its <script> tag in index.html. */
(function () {
  var MEASUREMENT_ID = "G-39DJ689CBQ";

  var optedOut = navigator.globalPrivacyControl === true ||
    navigator.doNotTrack === "1" || window.doNotTrack === "1";
  if (optedOut) return;
  if (location.hostname !== "funmitoblessed.com" && location.hostname !== "www.funmitoblessed.com") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID);

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(MEASUREMENT_ID);
  document.head.appendChild(s);
})();
