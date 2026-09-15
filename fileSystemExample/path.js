/* 
In Node.js, path is a built-in module that helps you work with file and folder paths.
*/

import path from 'path';

// Join these folder/file names together to create a valid path.

const filePath = path.join('data','user.txt');
console.log('filePath :-',filePath);

// basename() gives you the last part of a path, usually the filename.
console.log('baseName :-',path.basename(filePath));

//dirname() gives you the folder/directory containing the file.
console.log('dir name :-',path.dirname(filePath));

// extname() gives you the file extension.
console.log('extension Name :-',path.extname(filePath));

/* This one is slightly more important to understand carefully.
path.resolve() creates an absolute path. */

const resolvePath = path.resolve('user.txt');
console.log('resolve path :-',resolvePath);


/*

| Method            | What it does             |
| ----------------- | ------------------------ |
| `path.join()`     | Joins path pieces        |
| `path.resolve()`  | Creates an absolute path |
| `path.basename()` | Gets filename            |
| `path.dirname()`  | Gets parent directory    |
| `path.extname()`  | Gets file extension      |

- path is a built-in Node.js module used for working with file and directory paths. It provides 
methods like path.join(), path.resolve(), path.basename(), path.dirname(), and path.extname(). 
It also helps make our code work consistently across different operating systems.

Absolute Path:-
An absolute path gives the complete location of a file or folder.
C:\Users\Abdul\project\data.txt

Relative Path:-
A relative path gives the location relative to your current location.
./data.txt

Absolute path = complete address. Relative path = address relative to the current location.
*/
