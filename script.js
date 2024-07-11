let operator="";
let fisrtnumber="";
let secondnumber="";


function operate(op){
    operator=op;

}
function clearresult(){
    operator="";
    fisrtnumber="";
    secondnumber="";
    document.getElementById('result').value="";
}
function append(num){
    if(operator==""){
        fisrtnumber=num;
        document.getElementById('result').value=fisrtnumber;

    }
    else{
        secondnumber=num;
        document.getElementById('result').value=secondnumber;  
    }
}
function result(){
    let res="";
    switch(operator){
        case '+':
            res=parseInt(fisrtnumber)+parseInt(secondnumber);
            break;
        case '-':
            res=parseInt(fisrtnumber)-parseInt(secondnumber);
            break;
        case '*':
            res=parseInt(fisrtnumber)*parseInt(secondnumber);
            break;
        case '/':
            res=parseInt(fisrtnumber)/parseInt(secondnumber);
            break;

    }
    document.getElementById('result').value=res;
}

