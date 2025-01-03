function check(){
    var input = document.getElementById("input").value;

    var result = document.getElementById("result");

    if(input % 2 == 0){
        result.innerHTML = '<p>This number is EVEN!</p>';
    }else if(input % 2 == 1){
        result.innerHTML = `<p>This number is ODD!</p>`
    }else{
        result.innerHTML = `<p>Invalid number!</p>`
    }

    if(result){
        result.className = "result";
    }
}