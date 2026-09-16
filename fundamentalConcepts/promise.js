/*
Question:- what is the promise?
Ans:- promise is a object which is handle the async operation and it's give the feature value
whether resolve,reject,pending.

-we can make promise chaining and avoid the callback hell.promise handle the error using
then/catch method.



*/

const getUser = ()=>{
    return new Promise((resolve,reject)=>{
        const isFlag = true;
        setTimeout(()=>{
            const user = {name:'Abdullah Khan',address:'Vapi',class:'4th'};
            if(isFlag){
                resolve(user);
            }
        })
    })
};

getUser().then((user)=>{
    console.log('user data :-',user);
}).catch((err)=>{
    console.log('getting error :-',err);
})