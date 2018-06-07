function isValidCard() {
    var nCard = prompt('Informe o número do cartão');
    while (nCard === '') {
        nCard = prompt('Sr.....é pra informar o cartão, Sr...');
    }
    var arrCard = [];
    for (var i = 0; i < nCard.length; i++) {
        arrCard.push(parseInt(nCard[i].split('')));
    }

    arrCard.reverse();

    for (var j = 0; j < arrCard.length; j++) {
        if (j % 2 === 1) {
            var duplicate = arrCard[j] * 2;
            arrCard[j] = parseInt(duplicate / 10) + duplicate % 10;
        }
    }
    var sum = 0;
    for (var k = 0; k < arrCard.length; k++) {
        sum += arrCard[k];
    }
    if (sum % 10 === 0) {
        alert("VÁLIDO! Parabéns Sr...Sabe digitar!");
    } else {
        alert('INVÁLIDO. Sr.....Tem certeza que é um cartão de verdade, Sr.?');
    }
    return sum;
}

isValidCard();
