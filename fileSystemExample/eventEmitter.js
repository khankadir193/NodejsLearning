/*
EventEmitter is a Node.js mechanism that allows one part of your application to emit (send) an 
event and another part to listen and respond to that event.

Something happens
      ↓
   Event emitted
      ↓
 Listener receives it
      ↓
   Do something

   User registers
      ↓
"registered" event
      ↓
Send welcome email


emitter.emit("hello")
        ↓
"hello" event happens
        ↓
emitter.on("hello", callback)
        ↓
callback executes
        ↓
Hello event happened!

.on() event:- Listen for an event.

.emit() event:- Trigger an event.

*/

import EventEmitter from 'events';

const emitter = new EventEmitter();

emitter.on('hello',()=>{
    console.log('Hello event happened...');
});

emitter.emit('hello');


emitter.on('login',(userName)=>{
    console.log(`Hello ${userName}`);
});

emitter.on('login',(userName)=>{
    console.log(`Create login activity for ${userName}`);
});


// .once():- Sometimes you want a listener to execute only once.
emitter.once('login',()=>{
    console.log('this run only on once..');
});

emitter.emit('login','Abdul Kadir Khan');

// .off() / .removeListener()

const handleLogin = ()=>{
    console.log('user logged in..');
};

emitter.on('login',handleLogin);
emitter.off('login',handleLogin);



