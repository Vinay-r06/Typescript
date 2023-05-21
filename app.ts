                                        //want install typescript compiler... because typescript will not run browser..so it needs compiler to convert ts ->js ..

                                        // run--> npm install -g typescript 
                                        // run--> tsc app.ts                           // it will covert app.ts-->app.js

// function add(num1,num2){
//     return num1 + num2;
// }

// console.log(add(1,6));                 // 7                         

// console.log(add('1','6'));               // 16



// assigning types 


// function add(num1: number,num2: number){
//     return num1 + num2;
// }

// console.log(add(1,6));                                          

// console.log(add('1','6'));              // it shows error..this is the method to compile error ..to get bug  during development..
//                                       // js will not get this type of bug..




// vt -5..type  inference and type casting...                                  



// const num1Element = document.getElementById('num1') as HTMLInputElement;
// const num2Element = document.getElementById('num2') as HTMLInputElement;
// const buttonElement = document.querySelector('button')!;


// function add(num1: number, num2: number){
//     return num1 + num2;
// }


// buttonElement.addEventListener('click', ()=>{
// const num1=num1Element.value;
// const num2=num2Element.value;
// const result =add(+num1, +num2);
// console.log(result);
// })



// vt-7...working with union types..





// var num1Element = document.getElementById('num1') as HTMLInputElement;
// var num2Element = document.getElementById('num2') as HTMLInputElement;
// var buttonElement = document.querySelector('button')!;


// // function add(num1: any, num2: any){                 //allowing "any" datatype..
// //     return num1 + num2;
// // }


// // buttonElement.addEventListener('click', ()=>{
// // const num1=num1Element.value;
// // const num2=num2Element.value;
// // const result =add(+num1, +num2);
// // const stringResult= add(num1, num2);
// // console.log(result);
// // console.log(stringResult);
// // console.log(add(true, false));
// // })



// //allowing only number and string datatype-->union type..


// function add(num1, num2){                 //allowing "number" and "string" datatype..
//     if(typeof num1==='number' && typeof num2==='number'){
//         return num1 + num2;
//     }
//     else if (typeof num1==='string' && typeof num2==='string'){
//         return num1 + ' ' + num2;
//     }
    
//     return +num1 + +num2;
// }


// buttonElement.addEventListener('click', ()=>{
// const num1=num1Element.value;
// const num2=num2Element.value;
// const result =add(+num1, +num2);
// const stringResult= add(num1, num2);
// console.log(result);
// console.log(stringResult);
// })

                                     
//output :  5
   //       2 3 




// vt--8....using object and array DataTypes... 





// const num1Element = document.getElementById('num1') as HTMLInputElement;
// const num2Element = document.getElementById('num2') as HTMLInputElement;
// const buttonElement = document.querySelector('button')!;

// const numResults: number[] = [];
// const textResults: string[] = [];


// function add(num1:number | string , num2:number | string){           
//     if(typeof num1==='number' && typeof num2==='number'){
//         return num1 + num2;
//     }
//     else if (typeof num1==='string' && typeof num2==='string'){
//         return num1 + ' ' + num2;
//     }
    
//     return +num1 + +num2;
// }

// function printResults(resultsObj: { val: number ; timestamp: Date}){
// console.log(resultsObj.val);
// }

// buttonElement.addEventListener('click', ()=>{
// const num1=num1Element.value;
// const num2=num2Element.value;
// const result =add(+num1, +num2);
// numResults.push(result as number);
// const stringResult= add(num1, num2);
// textResults.push(stringResult as string);
// printResults({val: result as number, timestamp: new Date()});
// console.log(numResults, textResults)
// })




// output:  16
//          [16] ['5 11']




// vt--9..working with type aliases and interfaces...





// const num1Element = document.getElementById('num1') as HTMLInputElement;
// const num2Element = document.getElementById('num2') as HTMLInputElement;
// const buttonElement = document.querySelector('button')!;

// const numResults: number[] = [];
// const textResults: string[] = [];

// type NumOrString = number | string ;
// type Result = { val: number ; timestamp: Date};
 
// //this also can used when we had implemation or class..or define structure of object..

// // interface ResultObj {        
// //     val: number ;
// //     timestamp: Date
// // }



// function add(num1:NumOrString , num2:NumOrString){           
//     if(typeof num1==='number' && typeof num2==='number'){
//         return num1 + num2;
//     }
//     else if (typeof num1==='string' && typeof num2==='string'){
//         return num1 + ' ' + num2;
//     }
    
//     return +num1 + +num2;
// }

// function printResults(resultsObj:Result ){
// console.log(resultsObj.val);
// }

// buttonElement.addEventListener('click', ()=>{
// const num1=num1Element.value;
// const num2=num2Element.value;
// const result =add(+num1, +num2);
// numResults.push(result as number);
// const stringResult= add(num1, num2);
// textResults.push(stringResult as string);
// printResults({val: result as number, timestamp: new Date()});
// console.log(numResults, textResults)
// })





// vt--10...understanding generics..


const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResults: Array<number> = [];                              // array generics...
const textResults: string[] = [];

type NumOrString = number | string ;
type Result = { val: number ; timestamp: Date};
 
//this also can used when we had implemation or class..or define structure of object..

interface ResultObj {        
    val: number ;
    timestamp: Date
}



function add(num1:NumOrString , num2:NumOrString){           
    if(typeof num1==='number' && typeof num2==='number'){
        return num1 + num2;
    }
    else if (typeof num1==='string' && typeof num2==='string'){
        return num1 + ' ' + num2;
    }
    
    return +num1 + +num2;
}

function printResults(resultsObj:Result ){
console.log(resultsObj.val);
}

buttonElement.addEventListener('click', ()=>{
const num1=num1Element.value;
const num2=num2Element.value;
const result =add(+num1, +num2);
numResults.push(result as number);
const stringResult= add(num1, num2);
textResults.push(stringResult as string);
printResults({val: result as number, timestamp: new Date()});
console.log(numResults, textResults)
})

// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     resolve('it worked!');
//     },1000);
// });


// myPromise.then((result)=>{
//     console.log(result);
// })


// output: it worked!                 // run : tsc


// if it resolves then we can do addtionally but it doesnt know which promise...so  add generic called string..


const myPromise = new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
    resolve('it worked!');
    },1000);
});


myPromise.then((result)=>{
    console.log(result.split('w'));
})




// output : ['it ', 'orked!']


