const os = require("os");

//System Information
console.log(os.cpus()); //CPUs [{}]
console.log(os.cpus().length + " core"); // 4 core
console.log(os.homedir()); //current user's home directory
console.log(os.tmpdir());  // current user's temp directory
console.log(os.hostname()); //host name
console.log(os.platform()); //platform
console.log(os.constants); //constants for error codes, process signals