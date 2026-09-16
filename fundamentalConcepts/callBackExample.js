/*
Question:- what is callback function?
Ans:- A callback function is a function which is passed as argument to another function.
call it later.when the async operation finishes.

-whenever callback going deep nested is called callback hell.
- This is commonly called callback hell or the pyramid of doom.
*/

const getUser = (callback)=>{
    setTimeout(()=>{
        const user = {name:'Abdul Kadir Khan',address:'mumbai'}
        callback(user);
    },100);
};

getUser((data)=>console.log(data.name,data.address));


// A very common Node.js pattern is the error-first callback:

const getUserData = (callback)=>{
    setTimeout(()=>{
        const error = null;
        const user = {name:'Abdul Saqib'};

        callback(error,user);
    },1000);
};

getUserData((err,data)=>{
    if(err){
        console.log('error :-',err);
        return ;
    }

    console.log('data value :-',data.name);
})