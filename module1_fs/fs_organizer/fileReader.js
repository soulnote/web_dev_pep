let fs = require("fs");
let path = require("path");
//taking input in inputArr
let inputArr = process.argv.slice(2);
console.log(inputArr);
let inputDir = inputArr[0];
// synchronously read the contents of directory 
let allentities = fs.readdirSync(inputDir);
let content = "";
for (let i = 0; i < allentities.length; i++) {
    let enitityName = allentities[i];
    // console.log(enitityName);

    //Add the path of entities of directory in given path
    let fullPath = path.join(inputDir, enitityName);
    //console.log(fullPath);
    let statsOfAPath = fs.lstatSync(fullPath);
    //condition to get the extension of evry entities
    if (statsOfAPath.isFile()) {
        // console.log(fullPath)
        let ext = path.extname(fullPath);
         console.log(ext);
        if (ext == ".txt") {
            content += fs.readFileSync(fullPath);

        }
    }
}
let filePath = path.join(inputDir, "summary.txt");
fs.writeFileSync(filePath, content); 
console.log("summary file created"); 