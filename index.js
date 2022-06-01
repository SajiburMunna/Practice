 //  const obj={
//    name:'sojib',
//    address:'Magura',
//    age:15
//  }

// const array=[{
//   name:'Munna',
//   add:'Shreepur',
//   age:15
// }, {
//   name:'Sojib',
//   add:'Shreepur',
//   age:15
// }]


// const a= array.map(del => delete del.age)

//  console.log(array)


// //two object compare


// const obj1={
//   name:'sojib',
//   add:'magura',
//   code:'#fff'
// }
// const obj2={
//   name:'munna',
//   add:'bangladesh',
//     code:1

// }


// console.log(JSON.stringify(obj2) === JSON.stringify(obj2));


// //iterate of objects

// console.log('','name' in obj1);

// for (var i in obj1){
//   console.log(i);

//   console.log(obj1[i])
// }

// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))

// //object copy

// const copyobj=Object.assign({},obj1)

// copyobj.name = 'Nadim Bro'
// console.log(copyobj);


// setTimeout (()=>{
//   console.log('5 sec')
// }
 
// ,5000)


// const add =()=>{

//   console.log('Hello world');
//   return (console.log('return'))
//   console.log('google')
// }


// console.log(add());


//   //
// function messageShow(wish,name){
//   function getName(){
//    const tName = name.trim();

//     console.log('tName',tName)
//     if(name.split(' ')[0].length>2){
//       return name.split(' ')[0];
//     }else {
//       return name.split(' ')[1];
//     }
//   }
//   var message = wish +' '+getName();
//   console.log(message)
  
// }

// messageShow('Good Night',' Mr Sojib     Hossen ')

// const greeting = '   Hello world!   ';

 
// console.log(greeting.trim());
// // expected output: "Hello world!";

// ///


//  function sqr(n){

//    return n * n
   
//  }

// console.log( sqr(2));


//   const whitespace = "hello world      ".replace(/\s/g, "");

//     console.log(a)

// //Functional Programming in Javascript 


//   const pureFunction =(n)=>{

//     return n*n
//   }

// console.log(pureFunction(5));

// var n=10;

// function change(){
//   n=100;
// }
 



// const functionObj={
//   cha : change
// }

//  functionObj.cha()

// console.log(n)


// const sum =(a,b)=>{
//   return a+b
// }
// console.log(sum(4,5))

// const multisum=(a,sum)=>{
  
// console.log( sum(10,10))
//   const ss= sum(10,10)
//   return a+sum(10,10)
// }

// console.log('multi',multisum(5,sum))


 


// console.log("--------------------------------------- CallBack Function -----------------------------------")

// function multi(a,b,sum){

//   return "Callback Result : " + a*b+sum(a,b);
  
// }

// console.log(multi(10,10,function (c,d){
//   return c+d;
// }))


// console.log("--------------------------------------- Real Senario of map Function ----------------------- ")

// const arr=[1,4,5,6,6]
// function myMap(arr,cb){
//   var newArr=[];
//   for(var i =0; i<arr.length;i++){
//     var temp =cb(arr[i],i,arr)
//     newArr.push (temp)
//   }
//   return newArr
// }

// var qb= myMap(arr,function(value){
//   return value*value*value;
// });

// console.log('map result',qb)

// console.log("--------------------------------------- Real Senario of filter Function ----------------------- ")


// function myFilter(arr,cb){
//   var newFilterArr=[];
//   for(var i =0; i<arr.length;i++){
//     if(cb(arr[i],i,arr)){
//        newFilterArr.push(arr[i])
//     }
//   }
//   return newFilterArr
// }


// console.log(myFilter(arr,function(value){
//   return value % 2 === 0
// }))

// console.log("-------------------------------Reducer-----------------------------")

// const redArr=[{name:'sojib',total:5},{name:'sojib1',total:6},{name:'sojib2',total:7}]
 
// // var redSum =redArr.reduce(function(prv,curr){
// //   return prv + curr.total;
// // });

// // console.log('Reducer Sum:',redSum)

 
// var result = redArr.reduce(function (acc, obj) { return acc + obj.total; }, 0);
// console.log(result);  // 7


//   console.log("------------------------Recursive Function ------------------------")

// function sayHi(n){
//   if(n===0){
//     return
//   }
//   console.log('Hi!,I am calling You.');
//   sayHi(n-1)
// }
// sayHi(5)

// function itemSum(n){
//  if(n===0)
//  { return 0}
// console.log(n)
//   return n + itemSum(n-1);
  
// }

// console.log(itemSum(5));




//  function goodSum(n){
//    return n+1
//  }

// function redSum(m){
//   return m+goodSum(m)
// }
// console.log(redSum(5));


// //abstraction ---implementation hide,(hiding unneccessry details)
// //encapsulation --- propertices and method binding 
// //inheritance --- inheritance
// //polymorphism ---different look




// console.log('-----------------------------OOP-------------------------------------')


// const rect={
//   width:10,
//   height:20,
//   calculateArea:function(){
//     return this.width*this.height
//   },
//   calculateRange:function(){
//     return 2*(this.width + this.height)
//   }
// }

// var area =rect.calculateArea();
// var range=rect.calculateRange();

// console.log(area);
// console.log(range);


// console.log('-------------------------OOP Practice-----------------------------')
// const recta={
//   width:100,
//   height:50,
//   draw:function(){
//     console.log("I am rectangle");
//     this.print()
//     console.log(this)
    
//   },
//   print:function(){
//     console.log('My width is ' +this.width)
//     console.log('My width is ' +this.height)
    
//   }
  
// }

//  recta.width = 150;

// recta.draw();


// function myFunc(){
//  recta.print()
// }

// myFunc();

// var another={
//   width:50,
//   height:55,
//   printPropertices:recta.print
// }

// console.log(another.printPropertices);
// another.printPropertices()



// console.log('---------------------Factory Pattern In Javasrcipt---------------------------')



// var createRect =function(width,height){
//   return {

//     width:width,
//   height:height,
//   draw:function(){
//     console.log("I am rectangle");
//     this.print()
//     console.log(this)
    
//   },
//   print:function(){
//     console.log('My width is ' +this.width)
//     console.log('My width is ' +this.height)
    
//   }
    
//   }
// }

// var rect1=createRect(10,0);
// rect1.draw();


// var rect2=createRect(1000,00000);
// rect2.draw();



// console.log('---------------------Constructor Pattern In Javasrcipt---------------------------')

// var Rect =function(width,height){
  
//    this.width = width,
//   this.height = height,
//   this.draw = function(){
//     console.log("I am rectangle");
//     this.print()
//     console.log(this)
    
//   },
//   this.print = function(){
//     console.log('My width is ' +this.width)
//     console.log('My width is ' +this.height)
    
//   }
  
// }


// // var Rect1=new Rect(100,20);
// // Rect1.draw()


// console.log('------------------------new Keyword---------------------------------')

// function myNew(constructor){
//   var obj={}
//   Object.setPrototypeOf(obj,constructor)
//   var argsArray=Array.prototype.slice.apply(arguments)
//   constructor.apply(obj,argsArray.slice(1))
//   return obj
// }



// var rect4=myNew(Rect,45,30);

// rect4.draw()

// console.log('----------------Itarator------------------------')
// const arr=[1,3,4];

// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }

// function createItarator(collection){
//   let i=0
//   return {
//     next(){
//       return{
//         done:i>= collection.length,
//         value:collection[i++]
        
//       }
//     }
//   }
  
// }

// let ireate=createItarator(arr);
// console.log(ireate.next());
// console.log(ireate.next());
// console.log(ireate.next());
// console.log(ireate.next());

// console.log("-------------for of----------------------------")


// for (let v of 'Sojib Hossen'){
//   console.log(v);
// }


// var mrMango={
//   name:'mango',
//   address:'mango para'
// }


// var rect ={
//   width:100,
//   height:200,

//   draw:function(){
//     console.log('I  am Rectangle');
//       console.log('My Width ' + this.width);
//       console.log('My height ' +this.height);
//     this.print();
//   },
//   print:function(){
//       console.log('My Width ' + this.width);
//       console.log('My height ' +this.height);
    
//   }
// }
// rect.draw();


// console.log('--------------')


// rect.height=300;
// rect.draw()



// console.log('--------------------')

// function myFunc(){
//   console.log(this)
// }
// new myFunc()


// var another={
//   width:100,
//   height:300,
//   printPro:rect.print()
// }

// console.log(another.printPro)


// console.log('-------factory pattern------')

// var createRect=function(height,width){
//   return{
//     width:width,
//     height:height,
//     draw:function(){
//       console.log('I am a rectangle')
//       console.log('My Width' + this.width);
//       console.log('My Height' + this.height)
      
//     },
//     print:function(){
//       console.log('I am a RectAngle')
//       console.log('My width'+ this.width);
//       console.log('My height' + this.height)
//     }
//   }
  
// }

// var rect1=createRect(100,400);
// rect1.draw()



// console.log('-----constructor--------')


// var Rectangle=function(width,height){
//   this.width=width
//   this.height=height
//     this.draw=function(){
//       console.log('I am a rectangle')
//       console.log('My Width' + this.width);
//       console.log('My Height' + this.height)
      
//     }
//     this.print=function(){
//       console.log('I am a RectAngle')
//       console.log('My width'+ this.width);
//       console.log('My height' + this.height)
//     }
// }
// var rect3=new Rectangle(100,100)
// rect3.draw()
// console.log(rect3.constructor);

// console.log('--------new keyword--------');


// function myNew (constructor){

//   var obj={}
//   Object.setPrototypeOf(obj,constructor.prototype)
//   var argsArray=Array.prototype.slice.apply(arguments)
//   constructor.apply(obj,argsArray.slice(1))
//   return obj
  
// }

// var rect4 =myNew(Rectangle,5000,5000)

// rect4.draw();



// console.log('-----constructor-----')

// var str =new String('str');

// console.log('My String is '+str)


// console.log('-------function is object in javascript-------')


// function test(){
//   console.log('Function is object')
// }



// console.log(test.name,test.length)

// console.log(typeof test)
// console.log(test.constructor);

// var Rect =new Function('width','height',`
//   this.width=width
//   this.height=height
//     this.draw=function(){
//       console.log('I am a rectangle')
//       console.log('My Width' + this.width);
//       console.log('My Height' + this.height)
      
//     }
//     this.print=function(){
//       console.log('I am a RectAngle')
//       console.log('My width'+ this.width);
//       console.log('My height' + this.height)
//     }`)


// rect5=new Rect(4,5)
//   rect5.draw();


// console.log('------call,apply,bind------')


// function myFunc(c,d){

//   console.log(this.a + this.b + c + d)
// }

 

// //call and apply almost same

// myFunc.call({a:50,b:50},40,50)  
// myFunc.apply({a:50,b:50},[40,50])

 
//   var bindCall=myFunc.bind({a:50,b:50} )
// bindCall(100,1000)


// console.log('---Pass by Value vs Pass by reference / call by value vs call by reference---')


// var n=10
// function change (n){
//   n=n +100;
//   console.log(n)
// }
// change(n);
// console.log(n);

// var obj={
//   a:10,
//   b:20
// }

// function changedMe(){
//   obj.a=obj.a+100
//   obj.b=obj.b+100
//   console.log(obj)
// }

// changedMe(obj)
// console.log(obj);



// console.log('-------abstraction in js ------------')


// var Rectangle=function(width,height){
//   var position={
//     x:50,
//     y:-100
//   }
  
//   this.width=width
//   this.height=height
//     var show =function(){
//       console.log('I am a rectangle')
//       console.log('My Width' + this.width);
//       console.log('My Height' + this.height)
//     }.bind(this)
//     this.print=function(){
//       console.log('I am a RectAngle')
//       console.log('My width'+ this.width);
//       console.log('My height' + this.height)
//       show()
//       console.log('Position x = '+position.x +  ' Y = ' + position.y)
//     }
//   this.getPosition = function(){
//     return position;
//   }
  
// }
// var rect3=new Rectangle(100,100)
// rect3.print()

// console.log(rect3.getPosition())


// console.log('---- getter and setter ----')



//  console.log('---ES6----')


//   let add =(a,b)=>{
//     return a+b
    
//   }

// const sum  = add(30,40)
// console.log(sum)


// function testMe(){
//   console.log(this)
// }

// testMe()

// var obj={
//   name:'sojib hossen ',
//   print2:function(){
//   console.log(this)
//   }
// }

// obj.print2()

// var obj2={
//   name:'munna',
//   print: function(){
     
//     setTimeout(()=>{
//       console.log('hello',+ this.name);
//     },1000)
//   }
// }
// obj2.print()

// console.log('-----default parameter-----')

// function greet(msg,name='hello'){
//   console.log(`${msg}!,${name}`)
// }

// greet('sojib','hello3')


// console.log('------custom object iterator----')


// let obj ={
//   start:1,
//   end:10,
//  [Symbol.iterator]:function(){
//    let currentValue =this.start
//    const self=this
//    return {
//      next(){
//        return{
//          done:currentValue>self.end,
//          value:currentValue++
//        }
//      }
//    }
   
//  }
// }

// for (let v of obj){
//   console.log(v);
// }


// console.log('----rest operator----')
// function sum(){
//   let sum =0;
//   for (let i=0 ; i<arguments.length;i++){
//     sum+=arguments[i]
//   }
//   return sum;
// }


// console.log(sum(1,3,4,5,5))

// function sum2(...rest){
//    console.log(rest );
//  }

// const a =[1,3,4,6,8,8];
// console.log(...a);

// const obj2={
//   a:10,
//   b:20
// }

// console.log(obj2)
// const obj5={...obj2}
// obj5.a=100
// console.log(obj5)

//Es6 oop

// class Rectangle {
//   constructor (width,height){
//     this.width=width
//     this.height=height
//     this.another =function(){
      
//     }
//   }
//   test=function(){
//     console.log('Hello world')
//   }
//   name='sojib hossen'
//   draw(){
//     console.log('Drawing..........')
//   }
// }

// let rect1 =new Rectangle(50,100);
// console.log(rect1);


// class Person{
//   constructor(name,email){
//     this.name=name,
//       this.email=email
//   }
//   print(){
//     console.log(this.name,this.email)
//   }
//   static create (str){
//     let person=JSON.parse(str)
//     return new Person(person.name,person.email)
//   }
// }

// let str='{"name":"Hm nayem","email":"hassan.m.nayem"}'

// let p1=Person.create(str)
// console.log(p1)

// function Shape(){
//   this.draw =function(){
//     console.log(this)
//   }
// }

// let s1 =new Shape()
// let anotherDraw
// 'use strict'
// function Shape(){
//   this.draw=function(){
//     console.log(this)
//   }
// }
// let s1=new Shape()
// let anotherDraw = s1.draw
// anotherDraw();


// 'use strict'

// class Person{
//   constructor(name,email){
//     this.name=name,
//       this.email=email
//   }
//   print(){
//     console.log(this)
//   }
// }
// let p1=new Person();
// console.log( p1.print


// console.log('---------Private data using symbol-----------')
// const _radius = Symbol()
// class Circle{
//   constructor(radius){
//     // this._radius = radius
//     this[_radius]=radius
//   }
//   draw(){
//     console.log('Drawing.........')
//   }
// }
// let c1 =new Circle (2,'Cred')
// console.log(c1.draw())

// console.log('--------Private Data Using Weak Map-------- ')

// class Shape {
//   constructor (color){
//     this.color = color
//   }
//   draw(){
//     console.log('Drawing.....')
//   }
// }

// class Rectangle extends Shape {
//  constructor(color,width,height){
//    super(color)
//    this.width=width
//    this.height=height
//  } 
//   calculate(){
//     return this.width + this.height
//   }

//   draw(){
//     console.log('Override Methods ... Drawing ...')
//   }
// }

// let r=new Rectangle('Green',50,100)
// console.log(r);

// console.log(r.draw());



// console.log('----------method override--------')

// console.log


// console.log('----Error------')

// let m =10
// if (m>5){
//   throw new Error ('M is Geater Than 5')
// }


console.log('-------try catch---------')


try {
  console.log('I am not a error')
  console.log('hello world')
  throw new Error( ' I am your error')
}catch {
  console.log('this your custom error' )
}
finally{
  console.log('I am finally done !')
}







 