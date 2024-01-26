// Async and sync tasks 

// 2 ways to implement async tasks:
// Promises
// async and await 

//-------------------Promises--------------------

//have 3 states: pending, fulfilled and rejected

function fetchData(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("Async task completed successfully");
            resolve();
        }, 1000);
    });
}

// use of .then, .catch and .finally

fetch('do something')
.then(console.log('something is done'))// success
.catch(console.log('error while doing something'))// error
.finally(console.log('finally done, nothing more'));// will always be called irrespective of flow

// use of async and await 

async function fetchData(){// write async before declaring 
    let smth = await 'done smth'// use await to bind the function to the task 
    console.log(smth);
}







