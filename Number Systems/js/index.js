//reset button
function resetbtn(){
    document.getElementById('numsysOpt1').selectedIndex = 0;
    document.getElementById('numsysOpt2').selectedIndex = 0;
    document.getElementById('result').value = "Conversion Result";
    document.getElementById('Uinput').value = "";
}
//convert button
function convertbtn(){
    let opt1 = document.getElementById('numsysOpt1').value;
    let opt2 = document.getElementById('numsysOpt2').value;
    let input = document.getElementById('Uinput').value;
    let converted;

    //Error handler conditions
    if(input.trim() === ""){
        alert("Field cannot be empty.");
        return resetbtn();
    }
    if(!isValid(input, opt1)){
        alert(`Invalid input for ${opt1} conversion.`);
        return resetbtn();
    }
    if(opt1 === opt2){
        alert("Your input cannot be converted with the same options. Please try again.");
        return resetbtn();
    }
   
    try{
        converted = convertInput(input, opt1,opt2);
        document.getElementById('result').value = converted;
    } catch (error){
        alert(`Error during conversion: ${error.message}`);
        return resetbtn();
    }
}
//funtions that handle errors
function getRegex(option){
    switch(option){
        case 'binary':
            return /^[01]+$/;
        case 'decimal':
            return /^\d+$/;
        case 'octal':
            return /^[0-7]+$/;
        case 'hexadecimal':
            return /^[0-9A-Fa-f]+$/;
        default:
    }
}
function isValid(input, option){
    const inputRegex = getRegex(option);
    return input.match(inputRegex) !==null;
}
function convertInput(input, opt1, opt2){
    switch(`${opt1}-${opt2}`){
        case 'binary-decimal':
            return parseInt(input, 2).toString(10);
        case 'binary-octal':
            return parseInt(input, 2).toString(8);
        case 'binary-hexadecimal':
            return parseInt(input, 2).toString(16);
        case 'decimal-binary':
            return parseInt(input, 10).toString(2);
        case 'decimal-octal':
            return parseInt(input, 10).toString(8);
        case 'decimal-hexadecimal':
            return parseInt(input, 10).toString(16);
        case 'octal-binary':
            return parseInt(input, 8).toString(2);
        case 'octal-decimal':
            return parseInt(input, 8).toString(10);
        case 'octal-hexadecimal':
            return parseInt(input, 8).toString(16);
        case 'hexadecimal-binary':
            return parseInt(input, 16).toString(2);
        case 'hexadecimal-decimal':
            return parseInt(input, 16).toString(10);
        case 'hexadecimal-octal':
            return parseInt(input, 16).toString(8);
        default:
            throw new Error('Invalid conversion');
    }
}