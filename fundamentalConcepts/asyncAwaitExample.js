/*
Question:- what is async/await ?
Ans:- async/await is a keyword which is built on over the promise.it is modern and cleaner 
way to write and handle the promise.it looks like the synchronous function.

-using async keword make asynchronous function as well as using await keyword it pause the
function execution until promise has settled. it always return the promise object. 

-using async/await handle the error using try/catch

- Async/await is syntactic sugar built on top of Promises. It provides a cleaner and more readable 
way to write Promise-based asynchronous code.

*/

const getUser = () => {
    return new Promise((resolve, reject) => {
        const isFlag = true;
        setTimeout(() => {
            const user = { name: 'khankadir', address: 'gorakhpur' };

            if (isFlag) {
                resolve(user);
            } else {
                reject('Promise has failed...');
            }
        })
    })
}

const main = async () => {
    try {
        const res = await getUser();
        console.log('res of result :-',res);
    }catch(err){
        console.log('Error :-',err);
    }
}

main();

