const video = document.getElementById('myVideo');
const overlayEnd = document.getElementById('endBlurOverlay');
const countdownText = document.getElementById('countdownText');
const countdownEl = document.getElementById('countdown');
const finalBtn = document.getElementById('finalUnlockBtn');

const randomLinks = [
  'https://grnjnn.faiirylove.net/?utm_source=da57dc555e50572d&ban=fb&j1=1&j2=1&s1=234613&s2=2123201',
  'https://www.profitableratecpm.com/ri2aefi1p8?key=a10b110330839bbfbb7fec351a7ec05d',
  'https://www.profitableratecpm.com/bawdk8ijc?key=79fad2e099b836ddb8ffd995baa06ef7'
];

video.addEventListener('ended', () => {
  const finalLink = randomLinks[Math.floor(Math.random() * randomLinks.length)];

  overlayEnd.style.display = 'flex';

  let counter = 5;
  countdownEl.textContent = counter;

  const countdownInterval = setInterval(() => {
    counter--;
    countdownEl.textContent = counter;
    if (counter === 0) {
      clearInterval(countdownInterval);
      countdownText.style.display = 'none';
      finalBtn.href = finalLink;
      finalBtn.style.display = 'inline-block';
    }
  }, 1000);
});
