export function loopThroughCards(cardData) {
  const cardContainerElem = document.querySelector('.card-container');
  cardContainerElem.innerHTML = '';
  let i = 0;
  for (const [key, value] of Object.entries(cardData['card-row']['cards'])) {
    let thisCard  = cardData['card-row']['cards'][i],
        thisCardTitle = thisCard['card-title'],
        thisCardText = thisCard['card-text'];
    const cardHTML = '<div class="card col-lg">\
    <div class="card-body">\
      <h5 class="card-title">' + thisCardTitle + '</h5>\
      <p class="card-text">' + thisCardText + '</p>\
      </div>\
    </div>';
    cardContainerElem.innerHTML += cardHTML;
    i++;
  }
}