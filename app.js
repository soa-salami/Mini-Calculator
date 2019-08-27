let doneCalc = false;

function insert(num){  
    if( !doneCalc || typeof num == "string"){
        document.form.textview.value = document.form.textview.value+num;
        doneCalc = false;
    }else{
        document.form.textview.value = num;
        doneCalc = false;
    }
}
function equal(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
        doneCalc = true;
    } 
}
function clean(){
    document.form.textview.value = "";
}
function back(){
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1)
}
function fnsin(){
    document.form.textview.value = Math.sin(document.form.textview.value*Math.PI/180);
}
function fncos(){
    document.form.textview.value = Math.cos(document.form.textview.value*Math.PI/180);
}
function fntan(){
    document.form.textview.value = Math.tan(document.form.textview.value*Math.PI/180);
}
function sqrt(){
    document.form.textview.value = Math.sqrt(document.form.textview.value);
}
function sq(){
    document.form.textview.value = Math.pow(document.form.textview.value,2);
}