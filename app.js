// Assignment No 6 

// Question No 1

// var multidimensionarray = [[],[],[],[]]
// console.log(multidimensionarray)

// Question No 2

// var multidimensionarray = [[],[],[],[]]

// multidimensionarray[0].push(0);
// multidimensionarray[1].push(1);
// multidimensionarray[2].push(2);
// multidimensionarray[3].push(3);

// console.log(multidimensionarray)

// document.write(multidimensionarray[0][0]  )
// document.write(multidimensionarray[1][0]  )
// document.write(multidimensionarray[2][0]  )
// document.write(multidimensionarray[3][0] + "<br>" + "<br>" )

// document.write(multidimensionarray[1][0]  )
// document.write(multidimensionarray[0][0]  )
// document.write(multidimensionarray[1][0]  )
// document.write(multidimensionarray[2][0] +"<br>" + "<br>" )

// document.write(multidimensionarray[2][0]  )
// document.write(multidimensionarray[1][0]  )
// document.write(multidimensionarray[0][0]  )
// document.write(multidimensionarray[1][0] +"<br>" + "<br>" )


// Question No 3

// for (let i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
//   }

// Question No 4

// var TableNumber = +prompt("Enter The Number To Show Its Multiplication Table ");
// var TableLength = +prompt("Enter The Length of Multiplication Table ");

// for (var i = 1; i <= TableLength; i++) {
//   document.write (TableNumber + " x " + i + " = " + (TableNumber * i  + "<br>"));
// }

// Question No 5

// var Fruits = ["Apple ", " Banana ", " Mango ", " Orange ", " Strawberry " + "<br>" + "<br>"];
// document.write(Fruits);

// for (var i = 0; i < Fruits.length; i++) {
//   document.write("Element At Index " + i + " is " + Fruits[i] + "<br>");
// }

// Question No 6

// // (a)
// var counting = [];
// for (var i = 1; i <= 15; i++) {
//     counting.push(i);
// }
// document.write("<h3>Counting:</h3>"  + counting);

// // (b)
// var reverseCounting = [];
// for (var i = 10; i >= 1; i--) {
//     reverseCounting.push(i);
// }
// document.write("<h3>Reverse Counting:</h3>"  + reverseCounting);

// // (c)
// var even = [];
// for (var i = 0; i <= 20; i += 2) {
//     even.push(i);
// }
// document.write("<h3>Even:</h3>"  + even);

// // (d)
// var odd = [];
// for (var i = 1; i <= 20; i += 2) {
//     odd.push(i);
// }
// document.write("<h3>Odd:</h3>" + odd);

// // (e)
// var series = [];
// for (var i = 2; i <= 20; i += 2) {
//     series.push(i + "k");
// }
// document.write("<h3>Series:</h3>"  + series);


// Question No 7

// var bakeryItems = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"];
// var userInput = prompt("Welcome To ABC Bakery. What Do You Want To Order Sir/Ma'am?");

// if (bakeryItems.includes(userInput)) {
//     var index = bakeryItems.indexOf(userInput);
//     document.write("<b>" + userInput + "</b>" + " Is Available At Index " + index + " In Our Bakery");
// } else {
//     document.write("We Are Sorry. " + "<b>" + userInput + "</b>" + " Is Not Available In Our Bakery");
// }


// Question No 8
// var A = [24, 53, 78, 91, 12];
// var largestNumber = A[0]; 
// document.write(A + "<br>");

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i]; 
//     }
// }

// document.write("The Largest Number In The Array Is " + largestNumber);


// Question No 9

// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];
// document.write(A + "<br>");

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i]; 
//     }
// }
// document.write("The Smallest Number In The Array Is " + smallest);

// Question No 10

// var multiplesOfFive = [];

// for (var i = 5; i <= 100; i += 5) {
//     multiplesOfFive.push(i);
// }

// document.write(multiplesOfFive);