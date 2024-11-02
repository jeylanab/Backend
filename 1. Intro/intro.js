// using commonJS
        const os = require('os')

        console.log(os.homedir());

        console.log(__filename);
        console.log(__dirname);


// HOW MODULE WORKS LETS TRY BY CREATING A MODULE CALLED MATH
const math = require('./math');

        console.log(math.sub(4,3));
        console.log(math.div(4,3));
        console.log(math.mul(4,3));
        console.log(math.mod(4,3));