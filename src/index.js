import _ from 'lodash';
import './style.scss';
// import TestImage from './component/test.jpg';
import Data from './component/data.json';
import printMe from './print.js';

// function component() {
//     const element = document.createElement('h1');
//     const btn = document.createElement('button');
  
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('testing');

//     // Add the image to our existing div.
//     const myIcon = new Image();
//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;

//     element.appendChild(btn);
//     element.appendChild(myIcon);

//     console.log(Data)
  
//     return element;
//   }
  
//   document.body.appendChild(component());


import bookListingTemplate from './component/templates/book-listing.handlebars';

document.addEventListener("DOMContentLoaded", function() {
	var div = document.createElement('div');
	div.innerHTML = bookListingTemplate({
		username: "test",
		info: "Your books are due next Tuesday",
		books: [
			{ title: "A book", synopsis: "With a description" },
			{ title: "Another book", synopsis: "From a very good author" },
			{ title: "Book without synopsis" }
		]
	});
	document.body.appendChild(div);
});