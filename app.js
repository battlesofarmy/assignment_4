// Problem 1 -------
function calculateMoney(ticketSale) {
    if(ticketSale<0){
    return ("Sorry, Baker Vai This is a Invalid Number");
    }
    let benifit = ((ticketSale * 120) - 900);
    return benifit;
    }

// Problem 5 -------

    function checkName(name) {
    if(typeof(name) != 'string'){
    return "invalid";
    }
    let tem = (name.slice(-1)).toLocaleLowerCase();
    let arr = ['a','y','i','e','o','u','w'];
    let result = arr.includes(tem);
    if(result){
    return "Good Name";
    }else{
    return "Bad Name";
    }
    }
// Problem 2-------

    function deleteInvalids(array) {
    let val = Array.isArray(array);
    if(val==false){
    return "Invalid Array"
    }
    let myArray = array.filter(ele=> (typeof ele == 'number' && isNaN(ele) == false) );
    return myArray;
    }
// Problem 3 -------

    function password(obj) {
    if(obj.siteName == undefined || obj.name==undefined || obj.birthYear==undefined || (obj.birthYear).toString().length!=4){
    return "invalid";
    }
    const siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const result = siteName +"#"+ obj.name + "@" + obj.birthYear;
    return result;
    }
// Problem 4 -------

function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr)==false || typeof livingCost != 'number'){
    return "invalid input"
    }
    let earn =0;
    arr.forEach(ele => {
    if(ele>=3000){
    earn += (ele*.8);
    }else{
    earn += ele;
    }
    });
    let savings = earn - livingCost;
    if(savings<0){
    return "earn more";
    }
    return savings;

}