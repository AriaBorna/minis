
function calculate(){
const number = document.getElementById("input_number").value;

const sum = document.getElementById("sum").checked;
const sub = document.getElementById("subtrac").checked;
const multi = document.getElementById("mult").checked;
const div = document.getElementById("division").checked;

var result = 0;
var print_r = document.getElementById("result");

if(sum){
if(number >= 0){
    for(let i = 0; i<= number;i++){
        result += i;
    }
}else{
    for(let i = 0; i>= number;i--){
        result += i;
    }
}
print_r.innerHTML = `The result is: ${result}`;

}else if(sub){
if(number >= 0){
    for(let i = number; i >= 0; i--){
    result -= i;
    }
}else{
    for(let i = number; i < 0; i++){
    result -= i;
    }
}
print_r.innerHTML = `The result is: ${result}`;

}else if(multi){
result = 1;
if(number >= 0){
    for(let i = 1; i<= number ;i++){
    result *= i;
    }
}else{
    for(let i = -1; i >= number ;i--){
    result *= i;
    }
}
print_r.innerHTML = `The result is: ${result}`;

}else if(div){
result = number >= 0 ? 1: -1;
if(number >= 1){
    for(let i = 1; i<= number ;i++){
    result /= i;
    }
}else if(number <= -1){
    for(let i = -1; i >= number ;i--){
    result /= i;
    }
}else{
    print_r.innerHTML = `Division by zero is not allowed.`;
    return;
}
print_r.innerHTML = `The result is: ${result}`;

}else{
print_r.innerHTML = `Please choose an operator first!`;
}

const rStyle = document.getElementById("result");
if(rStyle.innerHTML){
rStyle.className = "result"
}
}
