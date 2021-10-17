function calculator() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    
    function add(){
        return Number(num1) + Number(num2);
    }
    function subtract(){
        return Number(num1) - Number(num2);
    }
}




const calculate = calculator (); 
calculate.init('#num1', '#num2', '#result'); 
