// const http = require('http');
import http from 'http';

let server = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico'){
        res.writeHead(204)
        res.end()
        return
    }


    const respond = ((statusCode, htmlContent)=>{
        res.writeHead(statusCode, {'Content-type' : 'text/html; charset = utf-8'});
        res.end(htmlContent);
    });

    if(req.url === '/'){
        respond(200,
                `<div style="display:flex; align-items:center; justify-content:center; background: lightblue;"><h1 style="text-align: center; font-size: 24px;">Welcome to My Node.js Server</h1></div>
                <button style ="    padding: .5rem 1rem;
                margin: 1rem auto;
                background: #31df31;
                border-radius: .4rem;"> <a style=" text-decoration: none;"href="/about">About</a></button>
                `
        )
    }else if(req.url==='/about'){
        respond(200,
                `<div style="display:flex; align-items:center; justify-content:center; background: lightblue;"><h1 style="text-align: center; font-size: 24px; "> This is the About Page</h1></div>
                <button style= "    padding: .5rem 1rem;
                margin: 1rem auto;
                background: #31df31;
                border-radius: .4rem;"> <a style= "text-decoration: none;" href="/">Home</a></button>
                `
        )
    }else{
        respond(404,
                `<div style="display:flex; align-items:center; justify-content:center; background: lightblue;"><h1 style="text-align: center; font-size: 24px;color: red;">Page Not Found</h1></div>
                <button style= "    padding: .5rem 1rem;
                margin: 1rem auto;
                background: #31df31;
                border-radius: .4rem;"> <a style= "text-decoration: none;" href="/">&#x1F3E0; Home</a></button>
                `
        )
    };

});

let port = 5000;

server.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
