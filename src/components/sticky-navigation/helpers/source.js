export function navHelper(nestedDataParent, navLinksParent) {
  navLinksParent.innerHTML = '';
  let i = 0;
  for (const [key, value] of Object.entries(nestedDataParent)) {
    let thisLinkData  = nestedDataParent[i];
    const linkHTML = '<li class="nav__container--item ' + nestedDataParent[i]['link-class'] + '">' + writeLinkWithLogic(thisLinkData) + '</li>';
    navLinksParent.innerHTML += linkHTML;
    i++;
  }
}

function writeLinkWithLogic(linkData) {
  let thisLinkText  = linkData['link-text'],
      thisLinkURL   = linkData['link-url'],
      thisLinkType  = linkData['link-type'],
      linkHTML;
  switch (thisLinkType) {
    case 'anchor':
      linkHTML = '<a class="simple" href="' + thisLinkURL + '"> ' + thisLinkText + '</a>';
      break;
    case 'ext':
      linkHTML = '<a class="simple" href="' + thisLinkURL + '" rel="ext" target="_blank"> ' + thisLinkText + '</a>';
      break;
    case 'int': 
      linkHTML = '<a class="simple" href="' + thisLinkURL + '" target="_blank"> ' + thisLinkText + '</a>';
      break;
    case 'alert-trigger':
      linkHTML = '<a class="simple" id="alert-trigger" href="' + thisLinkURL + '"> ' + thisLinkText + '</a>';
  }
  return linkHTML;
}