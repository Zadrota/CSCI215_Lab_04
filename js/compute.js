

// -----------------------------------
// Global Variables Go Here

I = ["http://munsellb.people.cofc.edu/img/pound.jpeg", 'http://munsellb.people.cofc.edu/img/euro.jpeg', 'http://munsellb.people.cofc.edu/img/kroon.jpeg', 'http://munsellb.people.cofc.edu/img/canadian.jpeg', 'http://munsellb.people.cofc.edu/img/yuan.jpeg'];


// -----------------------------------
// Convert Function Goes Here

function convert() {
    dollar = document.getElementsByName("dollars")[0].value;
    selectElement = document.getElementById('currency');
    exchangeRate = selectElement.value;
    index = selectElement.selectedIndex;
    currency = selectElement.options[index].text;
    updateExchange(dollar, exchangeRate, currency, index);

}


// -----------------------------------
// Calculate Function Goes Here

function calculate(dollar, exchangeRate) {

    value = dollar*exchangeRate;
    return value;

}

// -----------------------------------
// Functions that are given
// Do not modify

function updateImage( index ) {

    var url = 'url(' + I[index] + ')';
    document.getElementById('bill_img').style.backgroundImage=url;

}

function updateExchange( dollar, exchangeRate, currency, index ) {

    document.getElementsByName("exchange")[0].value = calculate( dollar, exchangeRate ).toPrecision(4) + ' ' + currency;

    updateImage( index );

}





