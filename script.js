const to_do_item = document.getElementById('to_do_item');
const to_do_list = document.getElementById('to_do_list');

function addItem() {
    const itemText = to_do_item.value.trim();
    if (itemText !== '') {
        const li = document.createElement('li');
        li.textContent = itemText;
        to_do_list.appendChild(li);
        to_do_item.value = '' ;
        li.addEventListener('click', completeTask);
        const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteItem);
    li.appendChild(deleteBtn);
    }
}
function completeTask(event) {
    const item = event.target;
    item.classlist.toggle('completed');
}
function deleteItem(event) {
    const item = event.target.parentElement;
    to_do_list.removeChild(item);
}