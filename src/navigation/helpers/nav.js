// Import test
console.log('test');

// Babel test
const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();
console.log([a, b]);

// Pass in the parent of the nested data
// "Data.navigation['nav-links']" for example
// Also pass in the parent container of the nav links
// "nav-link-container" for example
export function nestedNavLinksLoop(nestedDataParent, navLinksParent) {
  let linkText;
  const linkHTML = 
    '<li class="nav-item">\
      <a class="nav-link" href="#">' + linkText + '</a>\
    </li>';
  navLinksParent.innerHTML = '';

  for (let i = 1; i < Object.keys(nestedDataParent).length; i++) {
    let linkText = nestedDataParent['link-text-' + i];

    navLinksParent.innerHTML += linkHTML;
  }
}


