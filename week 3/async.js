const wait =  (ms)=>{
    return new Promise (resolve=>setTimeout(resolve(`waited ${ms/1000} sec`),ms))
};

wait(1000).then(result =>{
console.log("fst");
return wait(2000);
}).then(result =>{
console.log("sec");
return wait(3000);
}).then(result =>{
console.log("th");
console.log("chain completed");})

async function sequence() {
   console.log(await wait(1000)) 
    
   console.log(await wait(2000)) 

   console.log(await wait(3000)) 
}

sequence();

const faild =  ()=>{
    return new Promise ((resolve, reject)=>{
        reject(new Error("somth wrong"))
    })
};

async function handleFaild(params) {
    try{
        await faild();
  }catch(error){
    console.error("caught error",error.message)
  }
}

handleFaild();