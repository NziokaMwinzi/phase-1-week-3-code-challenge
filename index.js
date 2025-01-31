    //referenced the html elemments using their id's
    const itemInput = document.getElementById('input');
    const addButton = document.getElementById('add');
    const clearButton = document.getElementById('clear');
    const shoppingListContainer = document.getElementById('list-container');
    //created an empty array to store the list items
    let shoppingList = [];
    //created a function to add the items to the list
    const updateList = () => {
        shoppingListContainer.innerHTML = '';
        shoppingList.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.text;
            listItem.className = item.purchased ? 'purchased' : '';
            listItem.addEventListener('click', () => {
                if (shoppingList[index].purchased === true) {
                    shoppingList[index].purchased = false;
                } else {
                    shoppingList[index].purchased = true;
                }
                updateList();
            });
            shoppingListContainer.appendChild(listItem);
        });
    };
//created event listeners for the add and clear buttons
    addButton.addEventListener('click', () => {
        const newItemText = itemInput.value;
        if (newItemText) {
            shoppingList.push({ text: newItemText, purchased: false });
            updateList();
        }
    });

    clearButton.addEventListener('click', () => {
        shoppingList = [];
        updateList();
    });

    updateList();
