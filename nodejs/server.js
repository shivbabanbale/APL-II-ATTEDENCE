const http=require("http");
const reqdata=require("fs")
const url=require("url")




const myserver=http.createServer((req,res)=>{

if(req.url== "/favicon.ico")return res.end()
const myurl=url.parse(req.url,true);
console.log(myurl)
   const log=`${Date.now()}: ${req.url} new reqest found\n` 
reqdata.appendFile("./log.txt",log,()=>{
    switch(myurl.pathname){
        case "/": res.end("Welcome to my first serever01");
        break;
        case "/about":
        const name=myurl.query.name;
        res.end(`hii my name is ${name}`);

        break;
        case "/search": 
        const search=myurl.query.search;
        res.end(`Welcome to my first contact for your search ${search}`);
        break;
        
        case "/home": res.end("Welcome to home");
        break;
        default:res.end("hii i am happy to help you");


    }

} )

})


myserver.listen(8000,()=>console.log("server is strated"));