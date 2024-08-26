const enterNum = parseInt(prompt("Ener your Number"));
const enterTotalNum = parseInt(prompt("Enter your Total Number"));

 const calculation = (enterNum/enterTotalNum)*100;

 const roundedValue = Math.round(calculation);

 document.write(roundedValue,"%");

 if (calculation >=80) {
     alert("Excellent you got A1 Grade");
 }

 else if(calculation >=70 ) {
     alert("Excellent you got A Grade");
 }

 else if(calculation >=60) {
     alert("Good you got B Grade");
 }

 else if(calculation >=50) {
     alert("Have to work on skills you got C Grade");
 }

 else if(calculation >=40) {
     alert("Have to work hard you got D Grade");
 }

 else{
     alert("You are Fail ");
 }