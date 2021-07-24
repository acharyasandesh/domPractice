var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');

filter.addEventListener('keyup', filterItem);

//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    //create new li element
    var newli = document.createElement('li');

    newli.className = 'list-group-item';

    //add text node withinput value
    newli.appendChild(document.createTextNode(newItem));

    //create delete button element

    var delButton = document.createElement('button');

    //add classs to dlt button
    delButton.className = 'btn btn-danger btn-sm float-right delete';
    
    // append text node to delete btn
    delButton.appendChild(document.createTextNode("X"));

    // append button to its parent li
    newli.appendChild(delButton);

    // append li to list
    itemList.appendChild(newli);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItem(e){
    //convert search value to lowercase
    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');
    //convert to arrays
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
} 