let form = document.getElementById("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let formData = {
        fName: document.getElementsByName('fName')[0].value,
        lName: document.getElementsByName('lName')[0].value
    };

    let jsonString = JSON.stringify(formData);


    let result = document.getElementById('result');
    result.innerText = jsonString;
})