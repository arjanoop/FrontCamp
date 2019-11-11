let b1 = document.getElementById("b1");

b1.addEventListener ('click', function () {
    var emailElement = document.querySelector('input[type=\'text\']');
    var inputText = emailElement.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat)) {
        emailElement.focus();
        return true;
    } else {
        alert("You have entered an invalid email address!");
        emailElement.focus();
        return false;
    }
});

document.querySelector('select').addEventListener('change', () => {
    let select = document.querySelector('select');
    selectedCategory = select[select.selectedIndex].value
    let divisions = document.querySelectorAll ('.M');
    for (const division of divisions) {
        if (division.getAttribute('category-id') === selectedCategory || selectedCategory === 'All') {
            division.style.display = 'block';
        } else {
            division.style.display = 'none';
        }
    }
                                            
    
});