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