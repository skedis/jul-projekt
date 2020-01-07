const cardHightlightID = 'card-highlight';

function randomGift() {
  // Getting collection of all gifts
  let gifts = document.getElementsByClassName('gift-card');

  // Removing id from the last chosen gift
  let lastRandom = document.getElementById(cardHightlightID);
  if (lastRandom != null) {
    lastRandom.removeAttribute('id');
  }

  // Picking random gift and adding the highlight id
  let randomCard = gifts[Math.floor(Math.random() * gifts.length)];
  randomCard.id = cardHightlightID;

  // Smooth scroll to the chosen gift
  randomCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
