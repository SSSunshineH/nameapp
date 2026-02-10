document.addEventListener('DOMContentLoaded', () => {
    //find the all the <select> labels under optiona-field
const selects = document.querySelectorAll(".optional-field select");
// for each select in selects
selects.forEach(select => {
    // set an event listener that trigger when user makes change to the select
    select.addEventListener('change', () => {
        // find the label in the same parent div of this <select>
        const label = select.parentElement.querySelector('label');
        // find the '+' symbol inside the label
        const symbol = label.querySelector(".optional-symbol");
        // if the value of select is valid
        if (select.value) {
            label.style.color = '#000';
            if (symbol) {
                symbol.style.color = '#000';
            }
        } else {
            label.style.color = '#888';
            if (symbol) {
                symbol.style.color = '#000';
            }
        }
    });
});
});
