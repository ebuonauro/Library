// Pass in the parent of the nested data
// Also pass in the parent container of the nav links
export function nestedDataHelper(nestedDataParent, navLinksParent) {
  navLinksParent.innerHTML = '';
  for (const [key, value] of Object.entries(nestedDataParent)) {
    console.log(`${key}: ${value}`);
    let linkText = `${value}`;
    const linkHTML = '<li class="nav-item">\
                        <a class="nav-link" href="#">' + linkText + '</a>\
                      </li>';
    console.log(linkHTML);
    navLinksParent.innerHTML += linkHTML
  }
}