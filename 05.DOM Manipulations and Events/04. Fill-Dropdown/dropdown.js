function addItem() {
    let text = document.getElementById('newItemText').value;
    let txtValue = document.getElementById('newItemValue').value;

    let menu = document.getElementById('menu')

    let option = document.createElement('option');
    option.textContent = text;
    option.value = txtValue;

    menu.appendChild(option);
    
    
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}