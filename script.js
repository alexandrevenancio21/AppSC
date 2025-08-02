const btn = document.getElementById('showCardBtn');
const overlay = document.getElementById('overlay');
const cardImg1 = document.getElementById('cardImg1');
const cardImg2 = document.getElementById('cardImg2');
const closeBtn = document.getElementById('closeBtn');

btn.addEventListener('click', () => {
  const cardNumber = Math.floor(Math.random() * 20) + 1;
  const cardCode = cardNumber.toString().padStart(2, '0');

  const filename1 = `c${cardCode}i1.jpg`;
  const filename2 = `c${cardCode}i2.jpg`;

  cardImg1.src = `images/cards/${filename1}`;
  cardImg2.src = `images/cards/${filename2}`;

  overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
});
/*
function shareOnFacebook() {
  const url = window.location.href;
  const imageUrl = cardImg1.src; // ou cardImg2.src se preferires
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&picture=${encodeURIComponent(imageUrl)}`;
  window.open(facebookUrl, '_blank');
}
*/

function shareOnFacebook() {
  const imagemURL = document.getElementById("cardImg2").src;

  const texto = encodeURIComponent("Descobre este gesto de bondade! 💙 #SomosFeitosDoMesmoCoração");

  const fbAppUrl = `fb://facewebmodal/f?href=https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imagemURL)}&quote=${texto}`;
  const fbWebUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imagemURL)}&quote=${texto}`;

  // Tenta abrir a app
  window.location.href = fbAppUrl;

  // Fallback: se não abrir, usa o browser
  setTimeout(() => {
    window.open(fbWebUrl, "_blank");
  }, 1000);
}