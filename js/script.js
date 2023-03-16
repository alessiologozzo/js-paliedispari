let submit;

if (document.body.id == "palindrome") {
    submit = document.getElementById("submit-string");
    submit.addEventListener("click", checkPalindrome);
}
else if (document.body.id == "even-odd") {
    submit = document.getElementById("submit-number");
    submit.addEventListener("click", evenOddGame);
}

function checkPalindrome() {
    let input = document.getElementById("input-string");
    let s = new String;
    let sUp;
    let isPalindrome = true;

    s = input.value;
    sUp = s.toUpperCase();
    input.value = "";

    if (s.length < 2) {
        input.placeholder = "Errore! Inserisci almeno 2 caratteri";
        return;
    }
    else if (hasWhiteSpace(s)) {
        input.placeholder = "Errore! Non sono ammessi spazi";
        return;
    }

    for (let i = 0; i < s.length / 2 && isPalindrome; i++)
        if (sUp.charAt(i) != sUp.charAt(s.length - i - 1))
            isPalindrome = false;

    if (isPalindrome)
        input.placeholder = "Palindroma:  " + s;
    else
        input.placeholder = "Non è palindroma:  " + s;
}

function hasWhiteSpace(s) {

    let space = false;

    for (let i = 0; i < s.length && !space; i++)
        if (s.charAt(i) == ' ')
            space = true;

    return space;
}

function evenOddGame() {

    let input = document.getElementById("input-number");
    let number = new Number;

    number = input.value;
    input.value = "";

    if (Number.isSafeInteger(+number) && number > 0 && number < 6) {

        let bet = document.getElementsByTagName("select")[0].value;
        let computerNumber = Math.floor(Math.random() * 5) + 1;
        let result = parseInt(number) + parseInt(computerNumber);


        if ((result % 2 == 0 && bet == "even") || (result % 2 == 1 && bet == "odd"))
            input.placeholder = "Hai vinto! Numero computer:  " + computerNumber + "  Totale:  " + result;
        else
            input.placeholder = "Hai perso! Numero computer:  " + computerNumber + "  Totale:  " + result;
    }
    else
        input.placeholder = "Errore. Devi inserire un numero intero da 1 a 5";
}