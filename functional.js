let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Make url format for states

function urlify(name) {
  return name.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperituve urls

function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}

console.log(imperativeUrls(states));


// urls: Functional urls

function functionalUrls(elements) {
  return elements.map(element => urlify(element));
};

console.log(functionalUrls(states));

//url: full functional urls
function stateAddress(elements) {
  return elements.map(element => "https://example.com/" + urlify(element));
}

console.log(stateAddress(states));


// Find states that are single words - Imperative Method
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}

console.log(imperativeSingles(states));

// Find states that are single words - Functional Method
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
  }

console.log(imperativeSingles(states));

//Return states that have Dakota - Using String#includes
function dakotaStates(elements) {
  return elements.filter(element => element.includes("Dakota"));
}

console.log(dakotaStates(states));

//Return states that have Dakota - Using Regex
function dakotaStates(elements) {
  return elements.filter(element => element.match(/\Dakota/));
}

console.log(dakotaStates(states));

// lenghts: imperativeLengths(elements)
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach (function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}

console.log(imperativeLengths(states));


// lenghts: functionalLengths(elements) - Calculate length of states and store
function functionalLengths(elements) {
  elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}

console.log(imperativeLengths(states));

let mul = [3, 4, 5];
// functionalMultiply : retrun multiplication of array emailElements
function functionalMultiply(elements) {
  return elements.reduce((product, element) => product *= element);
}

console.log(functionalMultiply(mul));
