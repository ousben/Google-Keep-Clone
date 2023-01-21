var items = [
    {
        checked : true,
        message : "this is me",
        id: 0
    },
    {
        checked : true,
        message : "this is Tim",
        id: 1
    },
    {
        checked : false,
        message : "this is Ouss",
        id: 2
    }
];

let list = document.createElement("ul");

function increment(array) {

    for(let i = 0; i < array.length; i++) {

        let item = document.createElement('li');

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = array[i].checked;
        item.appendChild(checkbox);

        checkbox.addEventListener("change", function() {
            array[i].checked = !items[i].checked;
        });

        let label = document.createElement("input");
        label.value = array[i].message;
        item.appendChild(label);

        label.addEventListener("change", function() {
            array[i].message = label.value;
        });

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "x"
        item.appendChild(deleteButton);

        deleteButton.addEventListener("click", function() {
            item.remove();
            const findCorrectId = function(element) {
                return element.id === items[i].id;
            }
            array.splice(items.findIndex(findCorrectId), 1);
              
        });

        list.appendChild(item);

    }

    return list
}

document.body.append(list)

function addItems() {

    let submitBtn = document.getElementById('submit-btn');
    let mainInput = document.getElementById('input');

    submitBtn.addEventListener("click", function() {

        let item = document.createElement('li');

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        item.appendChild(checkbox);

        checkbox.addEventListener("change", function() {
            items[i].checked = !items[i].checked;
        });

        let label = document.createElement("input");
        label.value = mainInput.value;
        item.appendChild(label);

        label.addEventListener("change", function() {
            items[i].message = label.value;
        });

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "x"
        item.appendChild(deleteButton);

        deleteButton.addEventListener("click", function() {
            item.remove();
            const findCorrectId = function(element) {
                return element.id === items[i].id;
            }
            items.splice(items.findIndex(findCorrectId), 1);
              
        });

        list.appendChild(item);

        items.push({
            checked: false,
            message: mainInput.value,
            id: items.length > 0 ? items[items.length - 1].id +1 : 0
        });
    });
    return list
}

console.log(increment(items));
console.log(addItems());