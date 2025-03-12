import React, { useState, useEffect } from 'react';

// ToDoApp Component
function TodoApp() {
  // State to manage the input and list items
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState(() => {
    // Load items from localStorage initially
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Effect to save items to localStorage whenever items state changes
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Function to handle adding a new item
  const addItem = () => {
    if (inputValue.trim() === '') {
      alert('You must write something!');
      return;
    }

    const newItem = { value: inputValue, isChecked: false };
    setItems([...items, newItem]);
    setInputValue(''); // Clear the input field
  };

  // Function to handle toggling checked state of an item
  const toggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isChecked = !updatedItems[index].isChecked;
    setItems(updatedItems); // Update items state
  };

  // Function to remove an item
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems); // Update items state
  };

  return (
    <div>
      <div className="header" id="myDIV">
        <h2 style={{ margin: '5px' }}>My To Do List</h2>
        <input
          type="text"
          id="myInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update input state
          placeholder="Title..."
        />
        <span onClick={addItem} className="addBtn">
          Add
        </span>
      </div>

      <ul id="myUL">
        {items.map((item, index) => (
          <li
            key={index}
            className={item.isChecked ? 'checked' : ''}
            onClick={() => toggleItem(index)} // Toggle item on click
          >
            {item.value}
            <span onClick={() => removeItem(index)} className="close">
              &#x2715;
            </span>
          </li>
        ))}
      </ul>

      <div className="next-header">
        <h2>
          <a href="characters.html">Go to the next page</a>
        </h2>
      </div>
    </div>
  );
}

export default TodoApp;
