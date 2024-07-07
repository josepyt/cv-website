// alert("Siteye Hoş Geldiniz")

console.log("Selamlar!") ;

// document.write("Yusuf Türlü")

// let i = 0 ;
// for(i ; i<=10 ; i=i+2) {
//     console.log("10'a kadar ikişerli sayılar : "  + i) ;
// }

// document.getElementById("head").innerHTML = "Merhabalar"

// let name = "Yusuf"
// let surname = "Türlü"
// let age = 19 

// let info = {
//     name: name,
//     surname: surname,
//     age: age
// }

// console.log(info.name) ;
// console.log(info) ;

// const func = () => {
//     console.log("Function Called") ;
// }

// func() ;

// const sum = (a,b) => {
//     return a + b ;
// }

// console.log(sum(5, 7)) ;

// function hello () {
//     console.log(this.name) ;
// }

// let obj = {
//     name: "Yusuf",
// }

// hello.call(obj) ;

// let fruits = ["banana","apple"] ;
// let vegetables = ["cucember","tomato"] ;

// console.log(fruits.concat(vegetables)) ;

// console.log(fruits.concat(vegetables).splice(1,2)) ;
// console.log(fruits.concat(vegetables).slice(1,2)) ;


// let cars = ["Fiat","Devrim","TOGG"]

// let filt = cars.filter(car => car == "TOGG") ;

// console.log(filt) ;

// let numbers = [1,2,3,4,5,6,7,8,9,10] ;

// let double = numbers.filter(double => double % 2 == 0) ;

// console.log(double) ;

// let numbers = [1,2,3,4,5,6,7,] ;

// let power = numbers.map(int => int*int) ;

// console.log(power) ;

// let numbers = [1,2,3,4,5,6,7,8,9,10] ;

// let sumWithTwo = numbers.map(int => int + 2) ;

// console.log(sumWithTwo) ;

// let numbers = [10,20,30,40,50] ;
// let sumOfArray = numbers.reduce((num1,num2) => num1 + num2 , 0);

// console.log(sumOfArray) ;
// 0 at the end of the second line its the begining value.



// var object = {
//     name: "Bülent",
//     age: 27,
//     city: "İstanbul",
//     abilities : {
//         programming: "JavaScript",
//         writing: "English",
//         speaking: "Turkish"
//     },
//     greet: function() {
//         console.log("Hello, My name is " + this.name + ". I'm " + this.age + " years old.");
//     },
// }

// console.log(object.greet) ;
// console.log(object.greet()) ;
// console.log(object.abilities) ;
// console.log(object.abilities.speaking) ;



// function Student() {
//     this.name = "Yusuf" ;
//     this.id = 345 ;
// }

// const student = new Student() ;

// console.log(student) ;
// console.log(student.id)



// function Book(bookName,Page) {
//     this.bookName = bookName;
//     this.Page = Page ;
// }

// let book1 = new Book("İçimizdeki Şeytan", 267) ;
// let book2 = new Book("Küçük Şeyler", 72) ;

// console.log(book1) ;
// console.log(book2) ;



// var defults = {
//     theme : "Dark" ,
//     fontSize : "16px" ,
// }

// var userSet = {
//     fontSize : "18px"
// }

// var userSettings = {...defults,...userSet} ;

// console.log(userSettings) ;



// var Class = {number: 2 , lesson: "Math"} ;
// for(let key in Class) {
//     console.log(key + " : " + Class[key]) ;
// }



// var Soldier = {} ;
// Object.defineProperty(Soldier,"division", {
//     value: "Infantry",
//     writable: false, // the value can't changed
//     configurable:false , // the value can't deleted and can't configurable
// }) ;

// Soldier.division = "Airborne Division" ; // this will not change the value

// console.log(Soldier.division) ; 



