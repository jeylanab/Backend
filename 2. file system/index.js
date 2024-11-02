const { error } = require('console');
const fs = require('fs');
const path = require('path');



// reading a file asynchronously
fs.readFile('./file/file.txt', 'utf8', (err, data) => {
   
    if (err) throw err;
    console.log(data);
    
    // you can use data.toString() if utf8 argument is not there on readfile function;
    // console.log(data.toString());
})

// using the path module
fs.writeFile( path.join(__dirname, 'file', 'new file.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log()
})

// synchronous file read method
// const data = fs.readFileSync('./file/file.txt', 'utf8');
// console.log(data);

console.log('JOE MAN')


// writing to a file
fs.writeFile('./file/write.txt', 'hello! this is the file i created from fs module', err => {
   
    if (err) throw err;
    console.log('file is created')
    
// append an information to existing file
    fs.appendFile('./file/write.txt', '\n this is new line of the file i created', err => {
       if (err) throw err;
       console.log('data is appended');
    
})
})


// deleting file 
fs.unlink('./file/file.txt', err => {
    if (err) throw err;
    console.log('file deleted');
   
})

// renaming file 
fs.rename(path.join(__dirname, 'file', 'write.txt'), 'newName.txt', err => {
    if (err) throw err;
    console.log('file is renamed')
})

// catch uncaught error
process.on('uncaught error', err => {
    console.log(`the error was: ${err}`)
    process.exit(1);
})