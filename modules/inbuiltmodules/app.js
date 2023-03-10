const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// System uptime in seconds
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
}
console.log(currentOS);