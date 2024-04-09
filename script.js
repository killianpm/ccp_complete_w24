document.addEventListener('DOMContentLoaded', function() {
    let addButton = document.getElementById('add-checkboxes-btn');

    addButton.addEventListener('click', function() {
        let lists = document.querySelectorAll('.ingredients');
        
        lists.forEach(function(list, listIndex) {
            let items = list.querySelectorAll('li:not(:has(> input[type=checkbox]))'); // Select only li without checkbox
            
            items.forEach(function(item, itemIndex) {
                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                // Generate a unique ID for each checkbox based on its position
                checkbox.id = `checkbox-${listIndex}-${itemIndex}`;

                let label = document.createElement('label');
                label.htmlFor = checkbox.id;
                label.appendChild(checkbox);
                
                // Insert the text node after the checkbox
                let textNode = item.firstChild;
                label.appendChild(textNode);
                
                // Clear the item's content and append the label
                item.innerHTML = '';
                item.appendChild(label);
            });
        });
    });
});
