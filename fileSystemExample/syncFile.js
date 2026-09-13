import fs from 'fs';

//read the file
const readFile = fs.readFileSync('user.txt','utf-8');
console.log('readFile:---',readFile);

//overwrite or create the file.
const writeFile = fs.writeFileSync('users.txt','kya kar rahe ho sab kuch ho gya');
console.log('write File...',writeFile);

//this is append the data into existing file.or add the content.
const appendFile = fs.appendFileSync('user.txt','\n how are you...');
console.log('appendFile...',appendFile);

//check whether file is exists.
const exists = fs.existsSync('user.txt');
console.log('exists...',exists);

//create a directory.. with deep nested.
const createDir = fs.mkdirSync('user data/abdul/kadir/file/data/okay',{recursive:true});
console.log('create the directory...',createDir);

//read files/dir sync
const files = fs.readdirSync('.');
console.log('files...',files);

//rename file sync and also can move the file into different file or dir.
const res = fs.renameSync('kadir.txt','user.txt');
console.log('res...',res);


