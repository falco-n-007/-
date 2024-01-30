"use strict";
const input = document.querySelector('input');
const decideButton = document.querySelector('#decide');
const resetButton = document.querySelector('#reset');
const result = document.querySelector('p');

let randomNumber = Math.floor(Math.random()*100)+1;

function TryYourLuck(){
    let randomNumber = Math.floor(Math.random()*100)+1;
    const userNumber = Number(input.value);
    let message;
    let sa = Number(Math.abs(userNumber-randomNumber))

    if(sa===0){
        message='無敵！！！！！'
    }else if(0<sa&&sa<=10){
        message='大吉！！！';
    }else if(10<sa&&sa<=15){
        message='吉';
    }else if(15<sa&&sa<=20){
        message='小吉';
    }else{
        message='末吉';
    }
    
    result.textContent = message;
    console.log(randomNumber)
}

function resetNumber(){
    randomNumber =  Math.floor(Math.random()*100)+1;
    result.textContent='';
}

decideButton.addEventListener('click',TryYourLuck);
resetButton.addEventListener('click',resetNumber);