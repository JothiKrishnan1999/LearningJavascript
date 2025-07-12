isLadduThere = true;
function waitInQueue(){ //Im wait in line and I will get laddu, when I get my turn!
   return new Promise((resolve, reject)=>{ 
      setTimeout(()=>{
         if(isLadduThere){
            resolve("Buy 1 KG Laddu");
         }
         else{
            reject("Laddu Finish");
         }
      },1000);
   });
}

async function buyLaddu(){
   try {
      let result = await waitInQueue();
      console.log(result);
   } 
   catch (error) {
      console.log("Laddu Over");
      
   }
   
}

function buyLaddu(){
   waitInQueue().then((message)=>{
      console.log(message);
   })
   .catch((error)=>{
      console.log(error);
   })
   .finally(()=>{
      console.log("Go Home");
      
   })
}
buyLaddu();
//console.log("laddu venum enaku");

function getToy() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🎁 Here's your toy!");
    }, 2000);
  });
}

async function openGift() {
  console.log("Waiting for gift...");
  let toy = await getToy(); // Waits here for 2 seconds
  console.log(toy); // 🎁 Here's your toy!
}

openGift();

// | Concept        | What it means                           | Used for                        |
// | -------------- | --------------------------------------- | ------------------------------- |
// | `Promise`      | A task that will complete in the future | Handling async work like fetch  |
// | `.then/.catch` | Handles success or failure of a promise | Promise chaining                |
// | `async`        | Makes a function return a promise       | So you can use `await` inside   |
// | `await`        | Pauses code until promise finishes      | Cleaner way to write async code |

