
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */

/*
   ;;;;;                   ;;;;;
   ;;;;;                   ;;;;;
   ;;;;;   (╯°□°)╯︵ ┻━┻   ;;;;;
 ..;;;;;..               ..;;;;;..
  ':::::'                 ':::::'
    ':`                     ':`
*/

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

/*
for (let i = 0; i < gifts.length; i++) {
  setTimeout(() => {
    gifts[i].classList.add('card-highlight');

    // Remove after 1000 miliseconds
    setTimeout(() => {
      gifts[i].classList.remove('card-highlight');
    }, 500);
  }, i * 500);
}
*/
