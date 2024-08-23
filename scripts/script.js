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
let checkUpper = document.getElementById('checkboxUpper')
let checkLower = document.getElementById('checkboxLower')
let checkNumber = document.getElementById('checkboxNumber')
let checkSymbol = document.getElementById('checkboxSymbol')

//funcoes
function generatePassword(){
    
    //capturar e converter tamanho 
    var passwordLength = Number(document.getElementById('passLength').value)
    //verificar se tamanho está vazio
    if(passwordLength <=0){
        alert('O campo de quantidade de caracteres está em branco. É necessário preencher.')
    }else if(passwordLength <= 3){ //verificar se tamanho é maior do que 4
        alert('Sua senha tem menos de 4 caracteres. Por favor, escolha uma quantidade a partir de 4') 
    }else{
        
        //verificar se usuário marcou opção de letras MAÍUSCULAS
        if(checkUpper.checked){
            // Gerar letra MAIÚSCULA Aleatória - método random
            const randomUpper = upperArray[Math.floor(Math.random() * upperArray.length)] 
            //passwordText.innerText += randomUpper
            passwordArray.push(randomUpper)
        }if(checkLower.checked){
            // Gerar letra MINÚSCULA Aleatória - método random
            const randomLower = lowerArray[Math.floor(Math.random() * lowerArray.length)] 
            //passwordText.innerText += randomLower
            passwordArray.push(randomLower)
        }if(checkNumber.checked){
            // Gerar NÚMERO Aleatório - método random
            const randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)]
            //passwordText.innerText += randomNumber
            passwordArray.push(randomNumber)
        }if (checkSymbol.checked){
            // Gerar NÚMERO Aleatório - método random
            const randomSymbols = symbolsArray[Math.floor(Math.random() * symbolsArray.length)]
            //passwordText.innerText += randomSymbols
            passwordArray.push(randomSymbols)
        }


        resultArea.style.display = 'block'
        passwordText.innerText = passwordArray.join('')

        

        
        //fim captura do tamanho da senha
        
    }


}

function limpar(){
    passwordText.innerText = ''
    passwordArray = []
    resultArea.style.display = 'none'
    
}