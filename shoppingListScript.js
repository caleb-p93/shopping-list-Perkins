document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('itemList');
    const itemForm = document.getElementById('itemForm');
    const itemNameInput = document.getElementById('itemName');
    const filterInput = document.getElementById('filter');
    const clearBtn = document.getElementById('clearBtn');

    let items = JSON.parse(localStorage.getItem('items')) || [];

    function renderItems() 
    {
      itemList.innerHTML = '';
      items.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('item');
        li.innerHTML = `
          <input type="text" value="${item}" disabled>
          <button class="editBtn">Edit</button>
          <button class="removeBtn" data-index="${index}">X</button>
        `;
        itemList.appendChild(li);
      });
    }

    function addItem(item) 
    {
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
      renderItems();
    }

    function removeItem(index) 
    {
      items.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(items));
      renderItems();
    }

    function clearItems() 
    {
      localStorage.removeItem('items');
      items = [];
      renderItems();
    }

    function filterItems(text) 
    {
      const filteredItems = items.filter(item =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      renderItems(filteredItems);
    }
})