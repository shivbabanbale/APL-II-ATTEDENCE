const ff= require("fs");
const os= require("os")

console.log("hii")
console.log(i=os.cpus().length)

// sync function
ff.writeFileSync("./text.txt","Shivaji the boss and king")

//async functon
// ff.writeFile("./text.txt","hii i am a syncronous wala",(err)=>{})
//     console.log("abjd")

// let result = ff.readFileSync("./readfile.txt","UTF-8");
// console.log(result)

// ff.readFile("./readfile.txt","UTF-8" ,(err,result)=>{
// if(err){
//     console.log(err);

// }else{
//     console.log(result)
// }

// })


// ff.appendFileSync("./text.txt","/nhii my name is shivba\n")

// console.log(ff.statSync("./text.txt"));

// ff.mkdirSync("./Shivba")

// ff.cpSync("./text.txt" ,"./copywali.txt");
// ff.unlink("./copywali.txt",()=>{});