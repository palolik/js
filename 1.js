function calculateMoney(ticketSale){
    if (ticketSale <= 0){
        console.log("invalid number of tickets sold");
        return 0;
    }else{
    const perTicketPrice = 120 ;
    const guardSalary = 500;
    const workerSalary = 50;
    const totalWorker = 8;
    const profit = (ticketSale * perTicketPrice) - (guardSalary + (workerSalary* totalWorker));
    return profit;
    }
}


function checkName(name) {
    if(typeof name === "string"){
    const smallLetterName = name.toLowerCase();
    const lastLetter =smallLetterName.slice(-1);
        if(lastLetter=="a" || lastLetter=="e" || lastLetter=="i" || lastLetter=="o" || lastLetter=="u" || lastLetter=="w" || lastLetter=="y"){
            console.log("good name");
            return name;
        }else{
            console.log("bad name");
            return name;
        }
        
    }
    else{
        error = "invalid";
        return error;
    }    
}


function deleteInvalids(array) {
    
 if(Array.isArray(array) == true){   
     let numArray = [];
  for (let i = 0; i < array.length; i++) {
    if(typeof array[i] === 'number' ){
        if(!isNaN(array[i])){
          if(array[i] !== undefined ){
             numArray.push(array[i]);
           }
        }
    }  
  }
     return numArray; 
 }else{
  return 'the input is not an array';
}
}


function password(obj) {
    if (!obj.hasOwnProperty('siteName') || !obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear')) {
      return 'invalid';
    }
      upperSiteName=obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
       let birthString = String(obj.birthYear);
     
    if (birthString.length !== 4) {
            return 'invalid';
    }else{
        const output = upperSiteName+'#'+obj.name+'@'+obj.birthYear;
        return output;}
  }

function monthlySavings(arr,livingCost) {
    // Validate input types
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
      return 'Invalid input';
    }else{
    const totalIncome = arr.reduce((sum, arr) => sum + arr, 0);
    const taxableIncome = arr.filter(arr => arr >= 3000).reduce((sum, arr) => sum + arr, 0);
    const Tax = taxableIncome * 0.2;
    const netIncome = totalIncome - Tax;
    const savings = netIncome - livingCost;
        if(savings < 0){
            return 'earn more';
            
        }else{
            return savings;
  
        }
        
    }
  }