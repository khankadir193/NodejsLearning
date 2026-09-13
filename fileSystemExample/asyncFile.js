import fs from 'fs';

//read file
fs.readFile('asyncFile.txt','utf-8',(err,data)=>{

    if(err){
        console.log('Error:-',err);
        return ;
    }

    console.log('File data...',data);
});
console.log('this run first...');

//write file
fs.writeFile('asyncFile.txt','no da what are you doing right now is this happened..',(err)=>{
    if(err){
        console.log('getting the error...',err);
        return;
    }

    console.log('File written successful..');
});

console.log('File written has been started....');

//append data or add the content into the file.
fs.appendFile('asyncFile.txt','\n how are you you have been done... \n okay bhai',(err)=>{
    if(err){
        console.log('Error...',err);
        return;
    }

    console.log('content has beeen appended...');
});

//read directory...
fs.readdir('.',(error,files)=>{
    if(error){
        console.log('Error..',error);
        return;
    }

    console.log('Files read..',files);
});

//rename files also we can move it into the deep file.
fs.rename('inaya.txt','kabe.txt',(err)=>{
    if(err){
        console.log('Error:-',err);
        return;
    }

    console.log('File renamed..');
})
