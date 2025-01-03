function convert(){
//get the unit
var unit = document.querySelector("#unit input:checked").id;

//calculate
// f to c
if(unit === "unitf"){
var far =document.getElementById('degree').value;
var C = ((far-32)*(5/9));
var final_C = C.toFixed(3)
document.getElementById("result").innerHTML = "Result = " + final_C + " °C";
}
// c to f
else if(unit === "unitc"){
var cel =document.getElementById('degree').value;
var F = (cel * (9/5)) + 32
var final_F = F.toFixed(3)
document.getElementById("result").innerHTML = "Result = " + final_F + " °F";
}

//result style
var converted = document.getElementById("result").textContent;
if (converted) {
document.getElementById("result").className = "pStyle";
}

}