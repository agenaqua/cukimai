// script.js

function closeAd() {
  const redirectUrl = "https://bugscrawled.com/ii8jptvfm?key=ab223ae93a27889dd2cc4b50a1715f3d";
  document.getElementById("topAd").style.display = "none";
  if (Math.random() < 0.4) {
    window.location.href = redirectUrl;
  }
}

// Iklan bawah (320x50)
window.addEventListener("DOMContentLoaded", () => {
  const adScript = document.createElement("script");
  adScript.type = "text/javascript";
  adScript.innerHTML = `
    atOptions = {
      'key': '38805ce397204cc2a1daefdc61110bc6',
      'format': 'iframe',
      'height': 50,
      'width': 320,
      'params': {}
    };
  `;
  const invokeScript = document.createElement("script");
  invokeScript.src = "//bugscrawled.com/38805ce397204cc2a1daefdc61110bc6/invoke.js";

  const bottomAd = document.getElementById("bottomAd");
  if (bottomAd) {
    bottomAd.appendChild(adScript);
    bottomAd.appendChild(invokeScript);
  }

  // PopUnder script
  const popScript = document.createElement("script");
  popScript.src = "//pl26423726.profitableratecpm.com/d4/74/54/d47454e44c5578a494516619dccd52bb.js";
  document.body.appendChild(popScript);
});
