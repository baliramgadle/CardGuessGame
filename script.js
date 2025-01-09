// Script for CARD GUESS GAME

// Elements access
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const answer = document.getElementById('answer');
const button = document.getElementById('button');
const score = document.getElementById('score');
const ins = document.getElementById('instruct');

// set play for validations
let play = false;

// declare score counter
let scr = 0;

// event listener for validating card no inputs
answer.addEventListener('input', function(){
    if(answer.value < 1 || answer.value > 3){
        answer.value = '';
    }
});

// event listner for button
button.addEventListener('click', function(){
    if(!play) {
        shuffle();
    }
});

// event listener for first card
first.addEventListener('click', function(){
    const value = first.innerText;
    const v = answer.value;

    if(v && play){
        if(v == value){
            scr += 2;
            first.style.backgroundColor = "green";
            first.style.color = 'white';
            reveal();
        }
        else {
            first.style.backgroundColor = 'red';
            first.style.color = 'black';
            console.log('wrong choice');
            if(scr > 0){
                scr--;
            }
            reveal();
        }
    }
    else {
        if(!play){
            console.log('reshuffle');
        }
        else {
            console.log('Enter num');
        }
    }

});

// event listener for second card
second.addEventListener('click', function(){
    const value = second.innerText;
    const v = answer.value;

    if(v && play){
        if(v == value){
            scr += 2;
            second.style.backgroundColor = "green";
            second.style.color = 'white';
            reveal();
        }
        else {
            second.style.backgroundColor = 'red';
            second.style.color = 'black';
            console.log('wrong choice');
            if(scr > 0){
                scr--;
            }
            reveal();
        }
    }
    else {
        if(!play){
            console.log('reshuffle');
        }
        else {
            console.log('Enter num');
        }
    }

});

// event listener for third card
third.addEventListener('click', function(){
    const value = third.innerText;
    const v = answer.value;

    if(v && play){
        if(v == value){
            scr += 2;
            third.style.backgroundColor = "green";
            third.style.color = 'white';
            reveal();
        }
        else {
            third.style.backgroundColor = 'red';
            third.style.color = 'black';
            console.log('wrong choice');
            if(scr > 0){
                scr--;
            }
            reveal();
        }
    }
    else {
        if(!play){
            console.log('reshuffle');
        }
        else {
            console.log('Enter num');
        }
    }

});

// shuffle function 
function shuffle(){
    answer.style.display = 'block';
    button.value = 'Shuffle';
    ins.style.display = 'block';

    let nums = [1,2,3];
    for(let i = nums.length-1; i>0;i--){
        const ri = Math.floor(Math.random()*(i+1));

        [nums[i],nums[ri]] = [nums[ri],nums[i]];
    }

    first.style.backgroundColor = 'blue';
    second.style.backgroundColor = 'blue';
    third.style.backgroundColor = 'blue';

    first.classList.add('first');
    second.classList.add('second');
    third.classList.add('third');

    first.style.color = 'blue';
    second.style.color = 'blue';
    third.style.color = 'blue';

    first.innerText = nums[0];
    second.innerText = nums[1];
    third.innerText = nums[2];

    play = true;
    answer.disabled = false;
}

// reveal function to reveal cards after picking
function reveal() {
    console.log('revealed');    
    score.innerText = scr;
    play = false;

    const value = answer.value;
    if(first.innerText == value){
        first.style.backgroundColor = 'green';
        first.style.color = 'white';

        if(second.style.backgroundColor == 'blue'){
            second.style.backgroundColor = 'white';
            second.style.color = 'black';

            if(third.style.backgroundColor == 'blue'){
                third.style.backgroundColor = 'white';
                third.style.color = 'black';
            }
        }
        else {
            third.style.backgroundColor = 'white';
            third.style.color = 'black';
        }
    }
    else if(second.innerText == value){
        second.style.backgroundColor = 'green'
        second.style.color = 'white';

        if(first.style.backgroundColor == 'blue'){
            first.style.backgroundColor = 'white';
            first.style.color = 'black';

            if(third.style.backgroundColor == 'blue'){
                third.style.backgroundColor = 'white';
                third.style.color = 'black';
            }
        }
        else {
            third.style.backgroundColor = 'white';
            third.style.color = 'black';
        }
    }
    else {
        third.style.backgroundColor = 'green'
        third.style.color = 'white';

        if(second.style.backgroundColor == 'blue'){
            second.style.backgroundColor = 'white';
            second.style.color = 'black';

            if(first.style.backgroundColor == 'blue'){
                first.style.backgroundColor = 'white';
                first.style.color = 'black';
            }
        }
        else {
            first.style.backgroundColor = 'white';
            first.style.color = 'black';
        }
    }
    answer.value = '';
    answer.disabled = true;

    first.classList.remove('first');
    second.classList.remove('second');
    third.classList.remove('third');
}

// End of Script