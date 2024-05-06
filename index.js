const http = require('http');

const fs = require('fs');

const port = 8081;

const requestHandler = (req,res)=>{
    
    let fileName = "";

    switch(req.url){
        case '/' : 
            fileName = "./index.html";
        break;

        case '/about' :
            fileName = "./about.html"
        break;

        case '/contact' :
            fileName = "./contact.html";
        break;

        case '/blogs' :
            fileName = "./blogs.html";
        break;
    }

    fs.readFile(fileName,(err,result)=>{
        if(!err){
            res.end(result);
        }
    })

}

const server = http.createServer(requestHandler);

server.listen(port,(err)=>{
    if(err){
        console.log("Server not start in port");
        return false;
    }
    console.log("Server Start start in port:- "+port);
})