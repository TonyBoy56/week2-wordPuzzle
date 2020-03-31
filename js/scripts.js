$(document).ready(function() {
  //on click function
  $("form").submit(function(event) {
    event.preventDefault();
    const number = $("#input1").val();
    let numbersArray = [];
    let primeArray = [];
    let counter = 0;
    let currentNumber;
    while (counter < number) {
      counter++;
      numbersArray.push(counter);
		}
		for (let i = 0; i < numbersArray.length; i++) {
      if (numbersArray[i] < 2) {
        primeArray.push(numbersArray[i]);
        numbersArray.splice(i,1)
      } else 
      currentNumber = numbersArray[i]
      return
    }
    console.log(`numbersArray = ${numbersArray} primeArray= ${primeArray}`);	
		});
  });