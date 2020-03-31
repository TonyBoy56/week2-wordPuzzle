$(document).ready(function() {
  //on click function
  $("form").submit(function(event) {
    event.preventDefault();
    // let stringInput = $("#input1").val().split("");
    // let puzzelArray = stringInput.map(function(letter) {
    //   if (letter === "a" || letter === "A" || letter === "e" || letter === "E" || letter === "i" || letter === "I" || letter === "o" || letter === "O" || letter === "u" || letter === "U"){
    // 		return "-";
    //   }
    //   return letter
    // })
    // console.log(puzzelArray);
    const number = $("#input1").val();
    const numbersArray = [];
    let counter = 0;
    while (counter < number) {
      counter++;
      numbersArray.push(counter);
    }
    console.log(numbersArray);
  });
});
