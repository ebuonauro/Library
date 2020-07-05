export function autocompleteWithKeywords(resultsData, optionsElem) {
  let i = 0;
  let resultOptions = [];
  for (const [key, value] of Object.entries(resultsData['components'])) {
    let resultOption = resultsData.components[i]["name"];
    resultOptions.push(resultOption);
    createListItemsForDynamicOptions(resultOption)
    i++;
  }
  new Awesomplete(optionsElem, {list: "#options"});
}

function createListItemsForDynamicOptions(resultOption) {
  const listItem = document.createElement("li");
  let itemContent = document.createTextNode(resultOption); 
  listItem.appendChild(itemContent); 
  document.getElementById('options').appendChild(listItem); 
}