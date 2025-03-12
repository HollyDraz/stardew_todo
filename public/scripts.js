// Load existing items from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
  loadItems();
});

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    saveItems(); // Save state when toggling checked
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("You must write something!");
    return;
  }

  addItem(inputValue, false);
  saveItems();
  document.getElementById("myInput").value = "";
}

function addItem(value, isChecked) {
  var li = document.createElement("li");
  li.textContent = value;

  if (isChecked) {
    li.classList.add('checked');
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  document.getElementById("myUL").appendChild(li);

  // Close button event to remove item
  span.onclick = function() {
    li.remove();
    saveItems();
  };
}

// Save list items and their state to localStorage
function saveItems() {
  var listItems = [];
  document.querySelectorAll("#myUL li").forEach(li => {
    listItems.push({
      value: li.textContent.replace("\u00D7", "").trim(),
      isChecked: li.classList.contains('checked')
    });
  });
  localStorage.setItem("items", JSON.stringify(listItems));
}

// Load list items from localStorage
function loadItems() {
  var items = JSON.parse(localStorage.getItem("items")) || [];
  items.forEach(item => addItem(item.value, item.isChecked));
}
