//alert("flying cars")
/*
this is a multi line comment
we are trying out the types 
of comments in javascript


*/


//console.log("Hi Everyone!!!!!")

//let fast = "Ford F-150"

//console.log(fast)

//fast = "Lamborgini Urus"
//console.log(fast)

//const beSure= confirm("are you sure you want to leave this page?")
 

//console.log(beSure)


//const meSure= prompt("Please enter your name")


//console.log(meSure)


//const username =prompt( "what is your name?")

//if(beSure){
//alert("welcome" +"username" + !!)// }

//const age = prompt("what is your age?")

//if (age < 18){
 //   alert("You are not allowed to access this site")//}
 //else{
//alert("Welcome to the site") 
//}

//const grade = prompt("What is your score?")

//0-99
// F - 0-45
// E - 46-55
// D - 56-65
// C - 66-75
// B - 76-85
// A - 86-99

// if(grade >=0 && grade <=45){
//     alert(meSure+ " Your grade is F")
// } else if(grade >=46 && grade <=55){
//     alert(meSure+ " Your grade is E")
// } else if(grade >=56 && grade <=65){
//     alert(meSure+ " Your grade is D")
// } else if(grade >=66 && grade <=75){
//     alert(meSure+ " Your grade is C")
// } else if(grade >=76 && grade <=85){
//     alert(meSure+ " Your grade is B")
// } else if(grade >=86 && grade <=99){
//     alert(meSure+ " Your grade is A")
// } else{
//     alert(meSure+ " Incorrect number")
// }\

// const trans = parseInt(prompt("Please select an option\n1. Check Balance\n2. Buy recharge card\n3. Buy data\n4. call customer care"))

// switch(trans){
//     case 1:
//         alert("Your balance is 2000")
//         break
//     case 2:
//        alert("You have select to buy a recharge card")
//             break
//      case 3:
//        alert("You have select to buy data")
//                 break
//      case 4:
//        alert("You have select to call customer care")
//                     break
//               default:
//                 alert("You entered a wrong number")
// }

// function greet(Visitor = "user"){
//     alert(`Welcome ${Visitor}!!!`)
// }
// greet(meSure)

// function add(x,y){
//     console.log(x*y)
// }
// add(52,10)

const foods = ["Rice", "Beans", "Yam", "Egusi", "Amala", "Ewedu"]



console.log("Original",foods)


//foods.pop()    this is used to remove at the ending of the array
//foods.push("fufu") this is used to add to the ending of the array
//foods.shift()  this is used to remove at the begining of the array
//foods.unshift("Plantain")  this is used to add to the begining of the array
// foods.splice(2,0, "Oha", "Eba")  This is used to add to the middle of the array. 2 represents the array you want to add to and 0 is to indicate that nothing will be deleted in the list
//foods. splice(4,1, "Porridge", "Calamari") This is used to add to the middle of the array. 4 represents the array you want to add to and 1 is to indicate the number of array that will be deleted. 



//console.log("altered", foods)


// const student= {
//     name: "Lekan",
//     age: 20,
//     gender: "Male",
//     hobbies: ["Football", "Basketball","Coding"],
//     Married: false
// }


// console.log("Original",student)

//student.grade = "B+" 
//student.Married = true


// delete student.Married



// console.log("altered",student)



// let x = 0

// while(x < 1000){
//     console.log(x, "I love you")
//     x++
// }

// const pin = "1234"


// let userPin =prompt("Please enter your pin")
// let count = 0
// while(userPin !== pin && count < 3){
//     count++
//     userPin = prompt("Please enter correct pin")
// }