var defaultItems = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];

var items = [];

let list = document.createElement("ul");

function createOneItem(input, checked) {
    let newItem = document.createElement('li');

    let id = items.length > 0 ? items[items.length - 1].id + 1 : 0;

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = checked;
    newItem.appendChild(checkbox);

    checkbox.addEventListener("change", function() {
        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items[i].checked = !items[i].checked;
                localStorage.setItem("list", JSON.stringify(items));
            }
        }
    });

    let label = document.createElement("input");
    label.value = input;
    newItem.appendChild(label);

    label.addEventListener("change", function() {
        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items[i].message = label.value;
                localStorage.setItem("list", JSON.stringify(items));
            }
        }
    });

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    newItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        newItem.remove();
        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items.splice(i, 1)
                localStorage.setItem("list", JSON.stringify(items));
            }
        }
    });

    items.push({
        checked: checked,
        message: input,
        id: id
    });
    localStorage.setItem("list", JSON.stringify(items));

    list.appendChild(newItem);
    return newItem;
}

function stateItems(array) {
    for(let i = 0; i < array.length; i++) {
        createOneItem(array[i].message, array[i].checked);
    }
    return list
}

document.body.append(list)

function setUpAddButton() {

    let submitBtn = document.getElementById('submit-btn');
    let mainInput = document.getElementById('input');

    submitBtn.addEventListener("click", function() {
        createOneItem(mainInput.value, false);
    });
}

console.log(stateItems(defaultItems));
console.log(setUpAddButton());