// GLOBAL VARIABLES
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("list");
var li = document.getElementsByTagName("li");
var tag = "BUTTON";

// Check the length of the input value when adding a listitem
function inputLength() { 
	return input.value.length;
}


function createListElement() {
	// Add new listitem to the list
	var listItem = document.createElement("li");
	listItem.appendChild(document.createTextNode(input.value));
	ul.appendChild(listItem);
	// Empty input 
	input.value = "";
	// Add delete button to listitem
	var addDeleteButton = document.createElement("button");
	addDeleteButton.innerHTML = "Delete";
	listItem.appendChild(addDeleteButton);
}

// Add listitem after "Enter" button is clicked if input value is not empty
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// Add listitem after "Enter" key is pressed if input value is not empty
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Add and remove the class "done" to the listitem (adds a line through the text)
function strikethroughListItem(event) {
  for (var i = 0; i < li.length; i++) {
    if (event.target.innerText == li[i].innerText) {
    	li[i].classList.toggle("done");
    } 
  };
}

// Delete the listitem with a confirmation window
function deleteListItem(event) {
    if (event.target.tagName === tag) {
    	var parent = event.target.parentElement;
    	var grandParent = parent.parentElement;
    	var result = confirm("Are you sure you want to delete the following item?\n\n" + "- " + parent.innerText.substring(0, parent.innerText.length - 6));
    	if (result) {
           grandParent.removeChild(parent);		
    	} 
    }
}

// EVENT LISTENERS
// Activated when the "enter" button is clicked
button.addEventListener("click", addListAfterClick);

// Activated when the "enter" key is pressed
input.addEventListener("keypress", addListAfterKeypress);

// Activated when a listitem or delete-button is clicked
ul.addEventListener("click",() => {
	strikethroughListItem(event);
	deleteListItem(event);
});
