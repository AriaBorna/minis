function calcOddNumbers(){
    //get the max
    const maxNums = parseInt(document.getElementById('maxNum').value);

    //check the value
    if (isNaN(maxNums)) {
        document.querySelector("#result_box").innerHTML = '<p>Please enter a valid number</p>';
        return;
    }  

    //collect odds
    const nums = [];
    for (let i = 0; i <= maxNums; i++) {
        if (i % 2 === 1) {
            nums.push(i);
        }
    }

    //seperator
    const separator = document.getElementById("seperator").value || ' - ';
    const result = nums.join(separator);

    //print the result
    const resultBox = document.getElementById('result_box');
    resultBox.innerHTML = `<p>${result}</p>`;
    resultBox.className = 'result_box';
}