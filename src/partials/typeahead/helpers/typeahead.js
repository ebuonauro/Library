export function autocompleteWithKeywords(resultsData, searchInputElem) {
  let i = 0;
  for (const [key, value] of Object.entries(resultsData['components'])) {
    let resultOption = resultsData.components[i];
    // list.push(resultOption);
    i++;
  }

  new Awesomplete(searchInputElem, {
    list: [
      {
        "label": "Navigation",
        "value": "global header sections section"
      },
      {
        "label": "Simple Search Input with Autocomplete",
        "value": "find global widgets ypeahead type widget"
      }
    ],
    replace: function(suggestion) {
      this.input.value = suggestion.label;
    }
  })
}