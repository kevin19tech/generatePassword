/*ARRAYS*/
//upper - letras maíusculas
const upperArray=['A','B','C','D','E','F','G','H','I','J','K','L', 'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
//lower - letras maíusculas
const lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//numbers - números
const numbersArray = [0,1,2,3,4,5,6,7,8,9]
//symbols - símbolos
const symbolsArray = ['!','@','#','$','%','^','&','*','(',')','_','+','~','`','|','}','{','[',']',':',';','?','>','<',',','.','/','-','=']
const passwordArray = []
//variaveis
var resultArea = document.getElementById('resultToogle')
var passwordText = document.getElementById('result')


//funcoes
function generatePassword(){
    resultArea.style.display = 'block'
    //início captura do tamanho da senha
    var passwordLength = document.getElementById('passLength').value
    passwordText.innerText = passwordLength 
    //fim captura do tamanho da senha

    // Gerar letra MAIÚSCULA Aleatória - método random
    const randomUpper = upperArray[Math.floor(Math.random() * upperArray.length)] 
    passwordText.innerText += randomUpper

    // Gerar letra MINÚSCULA Aleatória - método random
    const randomLower = lowerArray[Math.floor(Math.random() * lowerArray.length)] 
    passwordText.innerText += randomLower

    // Gerar NÚMERO Aleatório - método random
    const randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)]
    passwordText.innerText += randomNumber

    // Gerar NÚMERO Aleatório - método random
    const randomSymbols = symbolsArray[Math.floor(Math.random() * symbolsArray.length)]
    passwordText.innerText += randomSymbols
    



}

