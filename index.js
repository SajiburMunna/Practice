 const obj={
   name:'sojib',
   address:'Magura',
   age:15
 }

const array=[{
  name:'Munna',
  add:'Shreepur',
  age:15
}, {
  name:'Sojib',
  add:'Shreepur',
  age:15
}]


const a= array.map(del => delete del.age)

 console.log(array)


//two object compare


const obj1={
  name:'sojib',
  add:'magura',
  code:'#fff'
}
const obj2={
  name:'munna',
  add:'bangladesh',
    code:1

}


console.log(JSON.stringify(obj2) === JSON.stringify(obj2));


//iterate of objects

console.log('','name' in obj1);

for (var i in obj1){
  console.log(i);

  console.log(obj1[i])
}

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))

//object copy

const copyobj=Object.assign({},obj1)

copyobj.name = 'Nadim Bro'
console.log(copyobj);


setTimeout (()=>{
  console.log('5 sec')
}
 
,5000)


const add =()=>{

  console.log('Hello world');
  return (console.log('return'))
  console.log('google')
}


console.log(add());


  //
function messageShow(wish,name){
  function getName(){
   const tName = name.trim();

    console.log('tName',tName)
    if(name.split(' ')[0].length>2){
      return name.split(' ')[0];
    }else {
      return name.split(' ')[1];
    }
  }
  var message = wish +' '+getName();
  console.log(message)
  
}

messageShow('Good Night',' Mr Sojib     Hossen ')

const greeting = '   Hello world!   ';

 
console.log(greeting.trim());
// expected output: "Hello world!";

///


 function sqr(n){

   return n * n
   
 }

console.log( sqr(2));


  const whitespace = "hello world      ".replace(/\s/g, "");

    console.log(a)

//Functional Programming in Javascript 


  const pureFunction =(n)=>{

    return n*n
  }

console.log(pureFunction(5));

var n=10;

function change(){
  n=100;
}
 



const functionObj={
  cha : change
}

 functionObj.cha()

console.log(n)


const sum =(a,b)=>{
  return a+b
}
console.log(sum(4,5))

const multisum=(a,sum)=>{
  
console.log( sum(10,10))
  const ss= sum(10,10)
  return a+sum(10,10)
}

console.log('multi',multisum(5,sum))


 


console.log("--------------------------------------- CallBack Function -----------------------------------")

function multi(a,b,sum){

  return "Callback Result : " + a*b+sum(a,b);
  
}

console.log(multi(10,10,function (c,d){
  return c+d;
}))


console.log("--------------------------------------- Real Senario of map Function ----------------------- ")

const arr=[1,4,5,6,6]
function myMap(arr,cb){
  var newArr=[];
  for(var i =0; i<arr.length;i++){
    var temp =cb(arr[i],i,arr)
    newArr.push (temp)
  }
  return newArr
}

var qb= myMap(arr,function(value){
  return value*value*value;
});

console.log('map result',qb)

console.log("--------------------------------------- Real Senario of filter Function ----------------------- ")


function myFilter(arr,cb){
  var newFilterArr=[];
  for(var i =0; i<arr.length;i++){
    if(cb(arr[i],i,arr)){
       newFilterArr.push(arr[i])
    }
  }
  return newFilterArr
}


console.log(myFilter(arr,function(value){
  return value % 2 === 0
}))

console.log("-------------------------------Reducer-----------------------------")

const redArr=[{name:'sojib',total:5},{name:'sojib1',total:6},{name:'sojib2',total:7}]
 
// var redSum =redArr.reduce(function(prv,curr){
//   return prv + curr.total;
// });

// console.log('Reducer Sum:',redSum)

 
var result = redArr.reduce(function (acc, obj) { return acc + obj.total; }, 0);
console.log(result);  // 7


  console.log("------------------------Recursive Function ------------------------")

function sayHi(n){
  if(n===0){
    return
  }
  console.log('Hi!,I am calling You.');
  sayHi(n-1)
}
sayHi(5)

function itemSum(n){
 if(n===0)
 { return 0}
console.log(n)
  return n + itemSum(n-1);
  
}

console.log(itemSum(5));




 function goodSum(n){
   return n+1
 }

function redSum(m){
  return m+goodSum(m)
}
console.log(redSum(5));


//abstraction ---implementation hide,(hiding unneccessry details)
//encapsulation --- propertices and method binding 
//inheritance --- inheritance
//polymorphism ---different look




console.log('-----------------------------OOP-------------------------------------')


const rect={
  width:10,
  height:20,
  calculateArea:function(){
    return this.width*this.height
  },
  calculateRange:function(){
    return 2*(this.width + this.height)
  }
}

var area =rect.calculateArea();
var range=rect.calculateRange();

console.log(area);
console.log(range);


console.log('-------------------------OOP Practice-----------------------------')
const recta={
  width:100,
  height:50,
  draw:function(){
    console.log("I am rectangle");
    this.print()
    console.log(this)
    
  },
  print:function(){
    console.log('My width is ' +this.width)
    console.log('My width is ' +this.height)
    
  }
  
}

 recta.width = 150;

recta.draw();


function myFunc(){
 recta.print()
}

myFunc();

var another={
  width:50,
  height:55,
  printPropertices:recta.print
}

console.log(another.printPropertices);
another.printPropertices()



console.log('---------------------Factory Pattern In Javasrcipt---------------------------')



var createRect =function(width,height){
  return {

    width:width,
  height:height,
  draw:function(){
    console.log("I am rectangle");
    this.print()
    console.log(this)
    
  },
  print:function(){
    console.log('My width is ' +this.width)
    console.log('My width is ' +this.height)
    
  }
    
  }
}

var rect1=createRect(10,0);
rect1.draw();


var rect2=createRect(1000,00000);
rect2.draw();



console.log('---------------------Constructor Pattern In Javasrcipt---------------------------')

var Rect =function(width,height){
  
   this.width = width,
  this.height = height,
  this.draw = function(){
    console.log("I am rectangle");
    this.print()
    console.log(this)
    
  },
  this.print = function(){
    console.log('My width is ' +this.width)
    console.log('My width is ' +this.height)
    
  }
  
}


// var Rect1=new Rect(100,20);
// Rect1.draw()


console.log('------------------------new Keyword---------------------------------')

function myNew(constructor){
  var obj={}
  Object.setPrototypeOf(obj,constructor)
  var argsArray=Array.prototype.slice.apply(arguments)
  constructor.apply(obj,argsArray.slice(1))
  return obj
}



var rect4=myNew(Rect,45,30);

rect4.draw()

