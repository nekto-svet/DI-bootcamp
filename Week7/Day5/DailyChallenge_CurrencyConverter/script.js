const apiKey = "3c680c13d806592463bf3bed";

const getAllCurrencies = async() => {
    try{
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
        const allCurr = await response.json();
        optionSelectCurrencies(allCurr.supported_codes);
    }
    catch (error){
        console.log(error);
    }
};

getAllCurrencies()

const convertCurrency = async(curr1, curr2, amount) => {
    try{
        const response = await fetch (`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${curr1}/${curr2}/${amount}`);
        const pareCurr = await response.json();
        document.getElementById('result').innerText = `${(pareCurr.conversion_result).toFixed(2)} ${curr2}`;
    }
    catch (error){
        console.log(error);
    }
};

const optionSelectCurrencies = (arr) => {
    let html;
    arr.forEach(element => {
        if (element[0] == 'ILS'){
            html += 
        `<option value = ${element[0]} selected>
            ${element[0]} - ${element[1]}
        </option>`;
        } else {
            html += 
        `<option value = ${element[0]}>
            ${element[0]} - ${element[1]}
        </option>`;
        }
    document.getElementById('curr1').innerHTML = html; 
    document.getElementById('curr2').innerHTML = html; 
    });
};



document.getElementById('currencyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const curr1 = document.getElementById('curr1').value;
    const curr2 = document.getElementById('curr2').value;
    const amount = document.getElementById('amount').value;
    convertCurrency(curr1, curr2, amount);
});

document.getElementById('changeCurrencies').addEventListener('click', function() {
    const curr1 = document.getElementById('curr1').value;
    const curr2 = document.getElementById('curr2').value;
    document.getElementById('curr1').value = curr2;
    document.getElementById('curr2').value = curr1;
})