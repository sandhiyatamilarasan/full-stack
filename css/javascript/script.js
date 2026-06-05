// var a = 10; //Reinitinalize & Redeclare
// let b = 20; //Reinitinalize
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// var num = 10;
// var str = "sandhiya";
// var undefine;
// var Null = null;
// var boolean = true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefine);
// console.log(typeof undefine);
// console.log(typeof Null);
// console.log(typeof boolean);

// var height = 123n;
// var symbol = Symbol('li');

// console.log(typeof BigInt)
// console.log(typeof symbol)

// var arr = [10,20,30,40];
// console.log(typeof arr,arr);
// var obj = {
//     name:"sandhiya",
//     dept:["AI&DS","CT"]
// }
// console.log(typeof obj,obj)



// var a = 10;
// var b = "sandyy";

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a % b);
// console.log(a / b);


// //             &&     ||
// // true true   true  true
// // true false  false  true
// // false true  false  true
// // false false false    false
//  var a = true;
 //  var b = false;
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);


// a = 10;
// b = "10";
// console.log(a>b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a==b);
// console.log(a!==b);

// a = 10;
// b = 20;

// a += b; //a=a+b;

// console.log(a);
// a -=b; //a=a-b;
// console.log(b);
// a*=b; //a=a*b;
// console.log(a);
// a%=b; //a=a%b;
// console.log(a);
// a/=b; //a=a/b;  

// var a = 10;
// console.log(a++);
// console.log(++a);

// var a = 20;
// console.log(--a);
// console.log(a--);
// console.log(--a);


//  a = 1;
//  b = 2;
//  c = 0;

//  var result = a++ + ++c - ++a + ++b + c++ + b++ +a;
//  console.log(result)
 
//  var a = 10;
//  var b = 20;
//  // if condition
//  if(true){
//     // Template literals
//     console.log('$ {a} + ${b}= ${a+b}')

//  }

//  if(true){
//     a = 10;
//     console.log(a);
// //  }

// //  var a;
// //  console.log(a);


// // var mark = 30;
// // if(mark>=90){
// //     console.log(" 0 Grade");
// // }
// // else if(mark >= 70){
// //     console.log("A Grade");
// // }
// // else if(mark >= 35){
// //     console.log("Pass");
// // }
// // else{
// //     console.log("Fail");
// // }


// // var a = 10;
// // //condition ? true statement false statement 
// // var result = a%2==0 ? "Even" : "Odd"
// // console.log(result)

// var day = 2;
// switch(day){
//     case 1:{
//         console.log("Sunday");
//         break;
//     }
//     case 2:{
//         console.log("Monday");
//         break;

//     }
//     case 3:{
//         console.log("Tuesday");
//         break;

//     }
//     case 4:{
//         console.log("Wednesday");
//         break;

//     }
//     case 5:{
//         console.log("Thursday");
//         break;

//     }
//     case 6:{
//         console.log("Friday");
//         break;

//     }
//     case 7:{
//         console.log("Saturday");
//         break;

//     }
//     default:{
//         console.log("Invalid Input");
//     }
// }

// looping statements
// 1 time 11times 10times
// for(var i=1; i<=10; i++){
// console.log(i);
// }

// var val = 10246;
// var count = 0;
// while(val > 0){
//    count++;
// val = Math.floor(val/10);
// }console.log(count,val);
// }




// for(let i=1; i<=10;i++){
// if(i%2===0){
//     continue;
//  }
// console.log(1);
// }

// function add(a=5,b=6){
//     console.log(a+b);
// }

// add(); //Hoisting

//  function add(){
//     console.log(20+30);
//  }

// Arrow Function
// var demo = () => {
//     console.log(10+20);
//     // } 
//     // demo();

// // // Arrow Function
//    var demo = (a = 5, b = 6) => {
//     console.log(a+b);
//    }
//     demo(10,20);
//     demo();
//     demo(10);

    // // // spread operator 
    //  var arr = [10,20.30];
    //  var arr2 = [...arr,40,50];
    //  console.log(arr);
    //  console.log(arr2);

    //  // destructing operator

    //  var [m1,m2,m3,m4,m5] = [90,98,89,99,100];
    //  console.log(m1,m2,m3,m4,m5);

//      var {name,mobile,dept,email,isactive} = {
//          name: "Sandhiya",
//          mobile:"987654321",
//          dept:["AI&DS","CT"],
//          email:"sandhiyatamilarasan@gmail.com",
//          isactive:true
     
//      }
//      console.log(name,mobile,dept,email,isactive)

//      var arr = [10,20,30,40,50];
//      // for..in
//      for(let index in arr){
//         console.log(index)
//      }
//  // for..of
//     for(let value of arr){
//         console.log(value)
//     }

// //     var obj = {
//         name:"Sandhiya",
//         dept : ["AI&DS","CT"],
//         mobile: 987654321,
// }
// //     for(let key in obj);
//     console.log(key,obj[key])
 
    // var arr=[1,2,3,4,5];

    // var result = arr.map((val) => (val*2));
    // console.log(result)
    // console.log(arr)

    // var even = arr.filter((val)=> val%2===0);
    // console.log(even)

    // var sum = arr.reduce((add,val) => (add+val),0);
    // console.log(sum)

    var username =  {
        name:"Sandyy",
        dept:["IT","AI&DS"],
        skills:{ 
            programming:["Java","c"]
        }
    }