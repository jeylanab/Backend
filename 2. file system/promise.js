const fspromise = require('fs').promises;
const path = require('path');


const fileStore = async () => {
    try {
        const data = await fspromise.readFile(path.join(__dirname, 'file', 'write.txt'), 'utf8')
        console.log(data);
        await fspromise.writeFile(path.join(__dirname, 'file', 'newfile.txt'), 'this is new file');
        await fspromise.appendFile(path.join(__dirname, 'file', 'newfile.txt'), 'boom added new content');
        await fspromise.rename(path.join(__dirname, 'file', 'newfile.txt'), path.join(__dirname, 'file', 'renamed.txt'));
        
        let newData = await fspromise.readFile(path.join(__dirname, 'file', 'renamed.txt'), 'utf8');
        console.log(newData)
        
    }
    catch (err) {
        console.error(err);
    }
 
}

fileStore();