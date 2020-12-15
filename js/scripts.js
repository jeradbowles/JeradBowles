const submitBtn = document.getElementById('myButton');

const validate = (e) => {
    e.preventDefault();
    const name = document.getElementById('firstname');
    if (firstname.value === "") {
        alert("Please enter your first name.");
        firstname.focus();
        return false;
    }
    
    return true;
}

submitBtn.addEventListener('click', validate);