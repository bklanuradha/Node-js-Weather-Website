console.log("Start");

setTimeout(()=>{
    console.log("1s");
},1000);

setTimeout(function(){
    console.log("2s");
},2000);

setTimeout(function(){
    console.log("0s");
},0);

console.log("End");