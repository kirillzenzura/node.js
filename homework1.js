const colors = require ('colors/safe');

let rangeStart = +process.argv[2];
let rangeEnd = +process.argv[3];
let simpleRange = [];
let numArr = [];

function simpleNum (num){
    let flag = true;

    for (let i = 2; i < num; i++){
        if (num % i === 0){
        flag = false;}
        
    }
    if(flag)
    {simpleRange.push (num)};
}

function numArray (x, y){
    for (i = x; i <= y; i++ ){
        numArr.push (i);
    }
}

function simplyClever (rangeStart, rangeEnd){
    
    numArray (rangeStart, rangeEnd);
    numArr.forEach (el => simpleNum(el));
    for( let j = 0; j < simpleRange.length; j = j+3){
        console.log (colors.green (simpleRange[j]));
        console.log (colors.yellow (simpleRange[j+1]));
        console.log (colors.red (simpleRange[j+2]));
    }
    if(simpleRange == []){
        console.log (colors.red ("There are no simple numbers"));
    }
}

if (typeof rangeStart == 'number' && typeof rangeEnd == 'number' ){
    simplyClever (rangeStart, rangeEnd);
}else{
    console.log ('Not a number');
}




