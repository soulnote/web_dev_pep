let fs = require("fs");
let content= fs.readFileSync("f1.txt");
console.log("content:"+content);
fs.writeFileSync("abc.txt","hum aaj khush hai");
//update
//fs.appendFileSync("abc.txt","bhai khush kyo hai");
//fs.mkdirSync("web-dev");
let srcpath = "C:\\Users\\prate\\Desktop\\web_dev_pep\\module0_intro\\objects.js";
let dstpath = "C:\\Users\\prate\\Desktop\\web_dev_pep\\module1_fs\\copied_object_fileFrom_module0";
fs.copyFileSync(srcpath, dstpath);//this is used only to copy file content from any path 
// let abcpath="C:\\Users\\prate\\Desktop\\web_dev_pep\\module1_fs\\abc.txt";
// let f1path="C:\\Users\\prate\\Desktop\\web_dev_pep\\module1_fs\\f1.txt";
fs.copyFileSync(abcpath,f1path);