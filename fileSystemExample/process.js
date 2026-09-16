/*
what is process in node js.
process is a built-in Node.js object that gives you information and control over the currently 
running Node.js program.

Why is process important in Node.js?

process
  │
  ├── process.env
  │      └── Environment variables
  │
  ├── process.argv
  │      └── Command-line arguments
  │
  ├── process.cwd()
  │      └── Current working directory
  │
  ├── process.exit()
  │      └── Stop application
  │
  └── process.pid
         └── Process ID

- process is a built-in Node.js global object that provides information about and control over the 
current Node.js process, such as environment variables, command-line arguments, process ID, and 
exit behavior.

*/

console.log('platform :-',process.platform);
console.log('arch :-',process.arch);

/*process.env contains environment variables.
For example, suppose your .env file contains:
PORT=5000
DB_HOST=localhost
DB_USER=postgres*/
// console.log('env :-',process.env);
console.log('argv :-',process.argv);
console.log('CWD :-',process.cwd());
console.log('exit :-',process.exit(0));
console.log('pid :-',process.pid);