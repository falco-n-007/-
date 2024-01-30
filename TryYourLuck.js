"use strict";
/*HTMLから要素を取り込む*/
const input = document.querySelector('input'); 
const decideButton = document.querySelector('#decide');
const resetButton = document.querySelector('#reset');
const result = document.querySelector('p');

let randomNumber = Math.floor(Math.random()*100)+1;
/*運試しの処理*/
function TryYourLuck(){
    let randomNumber = Math.floor(Math.random()*100)+1;/*1~100までのランダムな整数を生成する*/
    const userNumber = Number(input.value);/*予想した数字*/
    let message;/*表示する結果*/
    let sa = Number(Math.abs(userNumber-randomNumber))/*生成した整数と予想した数字の差を求める*/

/*生成した数字と予想した数字の差によって表示する結果を変える*/
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

/*メッセージを表示し、生成されたランダムな数字はコンソールで確認できるようにする*/
    result.textContent = message;
    console.log(randomNumber)
}

/*結果をリセットする*/
function resetNumber(){
    randomNumber =  Math.floor(Math.random()*100)+1;
    result.textContent='';
}

/*ボタンを押したら処理が実行されるようにする*/
decideButton.addEventListener('click',TryYourLuck);
resetButton.addEventListener('click',resetNumber);
