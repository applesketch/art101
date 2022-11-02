/**
  * Author: Gloria Chim and Sabrina Pan
  * Created: 11.2.2022
  *
  * (c) ART101 Class
  **/

function nameSorter(inputName){
  // var userName = window.prompt("enter name");
  var userName = inputName;
  var nameArray = userName.split("");
  var sortedArray = nameArray.sort();
  var sortedName = sortedArray.join("");
  return(sortedName);
}

// thank you Wes for your wisdom
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Randomly select phrase
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Swap phrase with current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array.join('');
}


// find the button element
buttonEl = document.getElementById("my-button");
newbutton = document.getElementById("other-button")
// find the form element
inputEl = document.getElementById("user-name");
// output
outputEl = document.getElementById("output");
newoutput = document.getElementById("output2")


// add an event listener to button
buttonEl.addEventListener("click", function(){
  // get value from name element
  var userName = inputEl.value;
  // sort or shuffle the value
  var wordArray = userName.toLowerCase().split('');
  var newName = shuffleArray(wordArray);
  // output
  outputEl.innerHTML = newName;
})

// second button event listener - just sorts and not randomize
newbutton.addEventListener("click", function(){
  // get value from name element
  var inputVal = document.getElementById("user-name").value;
  var sortedNewName = nameSorter(inputVal);
  // output
  newoutput.innerHTML = sortedNewName;
  document.getElementById("username").values= "Ur mom";
})
