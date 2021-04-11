var addNewItem = document.getElementById('form');
var itemList = document.getElementById('itemList');
var searchItem= document.getElementById('search');

//Add new item
addNewItem.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-group-item'; //Add class to li

    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    //Add new li to the ul
    itemList.appendChild(li);
}

//Delete a item
itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('You want to delete this item?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}

//Search items
searchItem.addEventListener('keyup', filterItems);

function filterItems(e) {

    var text = e.target.value.toLowerCase();
    
    //Get ul list items
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}