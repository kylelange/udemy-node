const util = require('util');

let name = 'Arlo';
const greeting = util.format('Hello, %s', name);
//will include a timestamp!
util.log(greeting);
