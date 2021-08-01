let fs=require("fs");
let path=require("path");
let readline = require('readline');

//taking input from console
let inputArray = process.argv.slice(2);
//categorizing the files and instructions(-s,-n etc) in separate array
let optionArr=[];
let fileArray=[];
for(let i=0; i<inputArray.length;i++) {
    let firstchar = inputArray[i].charAt(0);
    if(firstchar=="-"){
        optionArr.push(inputArray[i]);
    }else{
        fileArray.push(inputArray[i]);
    }
}


 
 //checking if file exist or not
for(let i=0; i<fileArray.length; i++){
    let ans=fs.existsSync(fileArray[i]);
    if(ans==false){
        console.log("File does not exist");
        return;
    }
}
//reading the contents of the files and storing them in contents variable
let contents="";
for(let i=0; i<fileArray.length; i++){
    contents+=fs.readFileSync(fileArray[i])+"\n\n";
}
//print contents of the file on the console
// console.log(contents);
contentArr=contents.split("\r\n");
// console.log(contents.split("\r\n"));

//checking for -n
if(optionArr.includes("-n")==true && optionArr.includes("-b")==false){
    let newcontentArr=contentArr;
    let newArr=[];
    for(i=0;i<newcontentArr.length;i++){
        if(newcontentArr[i]==""){
            newArr[i]=(i+1)+"";
        }else{
            newArr[i]=(i+1)+" "+newcontentArr[i];
        }
    }
    console.log(newArr.join("\n"));
}
//checking for -b
if(optionArr.includes("-b")==true && optionArr.includes("-n")==false){
    let newcontentArr=contentArr;
    let newArr=[];
    for(i=0;i<newcontentArr.length;i++){
        if(newcontentArr[i]==""){
            newArr[i]="";
        }else{
            newArr[i]=(i+1)+" "+newcontentArr[i];
        }
    }
    console.log(newArr.join("\n"));

}

// checking for -n and -b if both are in input or not
if(optionArr.includes("-n") && optionArr.includes("-b")){
    // check index of both operators to get first one
   let a= Math.min(optionArr.indexOf("-n"),optionArr.indexOf("-b"));
   let newcontentArr=contentArr;
   let newArr=[];
    if(optionArr[a]=="-n"){
        
        for(i=0;i<newcontentArr.length;i++){
            if(newcontentArr[i]==""){
                newArr[i]=(i+1)+"";
            }else{
                newArr[i]=(i+1)+" "+newcontentArr[i];
            }
        }
        console.log(newArr.join("\n"));
    }
    else{
            
            for(i=0;i<newcontentArr.length;i++){
                if(newcontentArr[i]==""){
                    newArr[i]="";
                }else{
                    newArr[i]=(i+1)+" "+newcontentArr[i];
                }
            }
            console.log(newArr.join("\n"));
    }
    
}
//now checking -s
let ispresent=optionArr.includes("-s");
if(ispresent){
    for(let i=1; i<contentArr.length;i++){
        if(contentArr[i]== "" && contentArr[i-1]==""){
            contentArr[i]=null;
        }
        else if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i]=null;
        }
    }
    let tempArr=[];
    for(let i=0; i<contentArr.length; i++){
        if(contentArr[i]!=null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr=tempArr;
 console.log(contentArr.join("\n"));
}


