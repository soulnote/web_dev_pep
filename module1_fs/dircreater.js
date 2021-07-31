let fs = require("fs");
let path = require("path");
let inputArray = process.argv.slice(2);
let mainDir = inputArray[0];
let firstmodules = inputArray[1];
let secondmodules =inputArray[2];
let thirdmodules = inputArray[3];
//current working directory
cwd=process.cwd();
//joining the paths into one path

let mainDirpath = path.join(cwd,mainDir);
let firstmodulespath = path.join(cwd,mainDirpath,firstmodules);
let secondmodulespath = path.join(cwd,mainDirpath,secondmodules);
let thirdmodulespath = path.join(cwd,mainDirpath,thirdmodules);

//printing paths of modules
console.log(mainDirpath);
console.log(firstmodulespath);
console.log(secondmodulespath);
console.log(thirdmodulespath);

// check that the directory exists or not
let isMainDirepresent= fs.existsSync(mainDirpath);
if(isMainDirepresent==true){
    console.log("Directory is already created");
    return;
}else{
    console.log(mainDir,"Directory created");
    // to create the directory
    fs.mkdirSync(mainDirpath);
    let topicfrominput= inputArray.slice(1,4);
    for(let i=0;i<topicfrominput.length;i++){
        let ctopicpath = path.join(mainDirpath,topicfrominput[i]);
        console.log(topicfrominput[i],"created");
        fs.mkdirSync(ctopicpath);
        for(let j=1;j<=5;j++){
            let modulepath=path.join(ctopicpath,"module"+i);
            fs.mkdirSync(modulepath);
            console.log("module"+i,"created inside",topicfrominput[i]);
            let filepath = path.join(modulepath,"content.md");
            fs.writeFileSync(filepath,"# Hello");
        }
    }
} 