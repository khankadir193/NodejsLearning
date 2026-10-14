/*

1. Node.js is different
Node.js does not have the browser's Web APIs/DOM.
Instead, Node.js uses a runtime architecture involving V8 + Node.js APIs + libuv.


             Node.js
┌─────────────────────────────┐
│          V8 Engine          │
│     Executes JavaScript     │
└──────────────┬──────────────┘
               │
               ↓
┌─────────────────────────────┐
│        Node.js APIs         │
│                             │
│ fs, HTTP, timers, etc.      │
└──────────────┬──────────────┘
               │
               ↓
┌─────────────────────────────┐
│           libuv             │
│                             │
│ Event Loop + async I/O      │
│ + thread pool               │
└─────────────────────────────┘


Question 2. What is libuv?
Ans:=- libuv is a library used by Node.js to provide its event loop and asynchronous I/O 
capabilities.

Question:- Node.js Event Loop phases
Ans:- This is particularly important for interviews.
Node's event loop has several phases.

        ┌───────────────┐
        │    Timers     │
        └───────┬───────┘
                ↓
        ┌───────────────┐
        │ Pending       │
        │ Callbacks     │
        └───────┬───────┘
                ↓
        ┌───────────────┐
        │    Poll       │
        └───────┬───────┘
                ↓
        ┌───────────────┐
        │    Check      │
        └───────┬───────┘
                ↓
        ┌───────────────┐
        │ Close         │
        │ Callbacks     │
        └───────────────┘
                │
                └──────→ repeat


The commonly discussed phases are:
1.Timers
2.Pending callbacks
3.Idle/prepare
4.Poll
5.Check
6.Close callbacks

9. setTimeout vs setImmediate

12. Browser vs Node.js Event Loop:-

|                   | Browser JavaScript            | Node.js               |
| ----------------- | ----------------------------- | --------------------- |
| JS engine         | Usually V8 in Chrome/Chromium | V8                    |
| Main JS execution | Call Stack                    | Call Stack            |
| Event Loop        | Browser runtime               | Node.js/libuv         |
| Async APIs        | Web APIs                      | Node.js APIs/libuv    |
| DOM               | Yes                           | No                    |
| `fetch()`         | Browser API                   | Node.js provides it   |
| `fs`              | No native Node `fs`           | Yes                   |
| DOM events        | Yes                           | No                    |
| Microtasks        | Yes                           | Yes                   |
| Timers            | Browser runtime               | Node.js/libuv/runtime |

-The main difference 
-JavaScript is the language. Node.js is a runtime environment that executes JavaScript outside the 
browser.


A very good mental model

Think of it this way:

- JavaScript:-

JavaScript language
       ↓
Call Stack
       ↓
Microtasks
Browser
Browser
   ↓
JavaScript + V8
   ↓
Web APIs
   ↓
- Browser Event Loop

- Node.js:-

Node.js
   ↓
JavaScript + V8
   ↓
Node APIs
   ↓
libuv
   ↓
Node Event Loop



14. One interview question you should practice:-

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

process.nextTick(() => {
  console.log("4");
});

console.log("5");


- The Event Loop is the mechanism that allows Node.js to perform non-blocking asynchronous 
operations even though JavaScript execution is single-threaded. Node.js uses V8 to execute 
JavaScript and uses its runtime mechanisms, including libuv, to handle asynchronous I/O and 
coordinate callbacks. When an asynchronous operation completes, its callback is scheduled, and 
the Event Loop eventually moves it to the call stack when JavaScript is ready to execute it.


The 4 things I'd recommend you master next:-

1. Call Stack
       ↓
2. Microtask Queue
       ↓
3. Macrotask / Task queues
       ↓
4. Node.js Event Loop phases
       ↓
5. process.nextTick()
       ↓
6. setImmediate()

*/