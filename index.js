const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "123456789";
const symbolSet = "!@#$%^&*()?/";


const passBox = document.getElementById("pass");
const passLength = document.getElementById("pass-length");
const upperInput = document.getElementById("Upper-case");
const lowerInput = document.getElementById("Lower-case");
const symbol = document.getElementById("Symbol");
const number = document.getElementById("Number");
const genButton = document.getElementById("gen-btn");
const cpyButton = document.getElementById("cpy-pass-btn");

const getChar = (data)=>{
    return data[Math.floor(Math.random()*data.length)];
}

const getPass = (password = "")=>{
    if(upperInput.checked){
        password += getChar(upperSet);
    }

    if(lowerInput.checked){
        password += getChar(lowerSet);
    }

    if(symbol.checked){
        password += getChar(symbolSet);
    }

    if(number.checked){
        password += getChar(numberSet);
    }

    if(password.length < passLength.value){
        return getPass(password);
    }

    passBox.innerText = truncateString(password,passLength.value);
}


getPass();
 genButton.addEventListener('click',
 function(){
    getPass();
 });

 function truncateString(str, num){
    if(str.length > num){
        let str1 = str.substring(0,num);
        return str1;
    }
    else{
        return str;
    }
 }
