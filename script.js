// sync 
// sync means one thing will start after another only when the previous one is done"
// setTimeout
// setInterval
// Promise
// fetch
// axios
// XMLHttpRequest
// if each of these is used in anything loop or switchcase, function or whatever you are doing that is not sync
// sync can be write without of these

console.log("hey1");
console.log("hey2");

setTimeout(function(){
    console.log("hey3");
},0)
console.log("hey4");

// async
// "async means start all tasks at once, and give the answer as soon as it arrives".
// setTimeout
// setInterval
// Promise
// fetch
// axios
// XMLHttpRequest
// async await
// call
// This is asynchronous code
// javascpript is not a asynchronous😂.
// callback function always run when an answer come from the async function
setTimeout(function(){
    console.log("async1");
},4000)

// fetch(`https://www.facebook.com`);

 var edes=new Promise((resolve, reject) => {
    if(true){
        return resolve();
    }
    else{
        return reject();
    }
})
edes.then(() => console.log("resolve"))
   .catch(() => console.log("error"))
  
var ese=new Promise((resolve, reject) => {
    var n= Math.floor(Math.random()*10);
    if(n<5){
        return resolve();
    }
    else{
        return reject();
    }
})   

ese.then(() => console.log("below"))
   .catch(() => console.log("above"))

var ans=new Promise((resolve, reject) => {
    return resolve("ghar per aao");
})   
ans.then(function(data){console.log(data)
   return new Promise(function(resolve, reject){
        return resolve("gate kholo gate lgao");
    })
})

ans.then(function(data){console.log(data)})

let oop=new Promise((resolve, reject) => {
    var p="aash"
    if(p=="aash"){
        return resolve();
    }
    else{
        return reject();
    }
})
oop.then(()=>console.log(true))
.catch(()=>console.log(false))

let fre=new Promise((resolve, reject) => {
    var ew=true;
    if(ew==true){
        console.log("today is going to match");
        return resolve();
    }
    else{
        console.log("Today is not match");
        return reject();
    }
})
fre.then(()=>console.log(true))
.catch(()=>console.log(false))

var ii = new Promise((resolve, reject) => {
    var eep = prompt("Enter the fruit name");
    switch(eep){
        case "apple":
        alert("Enter case fruit names");
        break;

        case "banana":
            alert("Enter case fruit names");
            break;

        case "Orange":
            alert("Enter case fruit names");
            return resolve()

        default:
            document.getElementById('message').innerText='Invalid choice! Please enter apple, banana, or orange.';
             return reject()
    }
});
ii.then(()=>console.log("This is correct"))
.catch(()=>console.log("This is not correct"));



    let std= new Promise((resolve,reject)=>{
        var hhh="akash";
        if(hhh!=="akash"){
            console.log("This is correct");
            return resolve();
        }
        else if(hhh===akash){
            console.log("This is neutral");
        }
        else{
            console.log("This is incorrect");
            return reject();
        }
    })
    std.then(()=>console.log("be a man"))
    .catch(()=>console.log("dont be a gay"));
   

    
function oloo(){
    var tt=new Promise((resolve,reject)=>{
        let mm=10;
        for(let i=20; i>10; i++){
            console.log(mm,i++);
            return resolve();
        }
       while(mm>5){
        console.log(mm,i++);
        return reject();
       }
    })
    tt.then(()=>console.log("for loop"))
    .catch(()=>console.log("while loop"))
}    
oloo();


let uu=new Promise((resolve, reject) => {
    var rr=33;
    while(rr==23){
        console.log("This is true")
        return resolve();
    }
    console.log("This is false")
    return reject();
})
uu.then(()=> console.log("This is goin to be real"))
.catch(()=>console.log("This is not going to be real"))

// async await
//"Any function in which you write async code, to shorten that code.""If there is async code, you will need to use a promise, and when its response comes, you will have to use the then keyword. To avoid using **then**, you can use async-await."

 async function abcd(){
    await fetch(`https://randomuser.me/api/`)
    .then(function (raw){
        return raw.json();
    })
    .then(function (data){
        console.log(data);
    })
 } 
abcd();

// another async await in this case we do not use this keyword instead we use await.

async function efg(){
    var r=await fetch(`https://randomuser.me/api/`)
    var e= await r.json();
    console.log(e);
}

async function fes(){
    var red=await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    let f=await red.json();
    console.log(f)
}
fes();
// async await in arrow function
 (async (ddce)=>{
    let ees= await fetch(`https://api.thecatapi.com/v1/images/search`)
    let des=await ees.json();
    console.log(des);
    (ddce);
 });

 const opo = async () => {
     try{
        let oo = await fetch(`https://dummyjson.com/products`);
        let api = await oo.json();
        console.log(api);
     }catch(error){
         console.log(`api called failed`,error.message);
     }
};

opo(); 

// async await in arrow function
(async (data)=>{
    var ball =await fetch(`https://dog.ceo/api/breeds/image/random`);
    var foot=await ball.json()
    console.log(foot)
    (data);
});

(async (pole)=>{
    const rew=await fetch(`https://reqres.in/api/users`)
    let user=await rew.json();
    console.log(user)
    (pole);
});
    



(async(ggg)=>{
   let gg=await fetch(`https://dummyjson.com/users`);
   let vv=await gg.json();
   console.log(vv);
   ggg="aakash";
})
().then(()=>console.log("That is integerated")).
catch(()=>console.log("founded error"));