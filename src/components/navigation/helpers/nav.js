// Pass in the parent of the nested data
// Also pass in the parent container of the nav links
export function nestedDataHelper(nestedDataParent, navLinksParent) {
  // Clear the dummy data if there is any
  navLinksParent.innerHTML = '';

  // Loop through navigation object
  let i = 0;
  for (const [key, value] of Object.entries(nestedDataParent)) {
    let thisLinkData  = nestedDataParent[i];
    const linkHTML = '<li class="nav-item">' + writeLinkWithLogic(thisLinkData) + '</li>';
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
      linkHTML = '<a class="nav-link" href="' + thisLinkURL + '"> ' + thisLinkText + '</a>';
      break;
    case 'ext':
      linkHTML = '<a class="nav-link" href="' + thisLinkURL + '" rel="ext" target="_blank"> ' + thisLinkText + '</a>';
      break;
  }
  return linkHTML;
}