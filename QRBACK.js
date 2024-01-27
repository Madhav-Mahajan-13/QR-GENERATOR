import express from "express";
 import qr from "qr-image";

import bodyParser from "body-parser";

import { dirname } from "path";//to get exact file location
import { fileURLToPath } from "url";

import fs from "fs";

const dir = dirname(fileURLToPath(import.meta.url));

const app =express();
const port =3000;

app.use(bodyParser.urlencoded({extended:true}));
var url;

// app.use(geturl);

//app.use(createimg);
// app.use(changeimg);

app.listen(port,()=>{
    console.log("chalda va port "+port);
})

app.get("/",(req,res)=>{

    console.log(dir+"/INDEX.HTML");
    //res.send("hi")
     res.sendFile(dir+"/INDEX.HTML");


})

app.post("/submit",(req,res)=>{
    url=req.body["url"];
    fs.writeFile("url.txt",url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

       var img = qr.image(url, {"ec_level":"H" });
       img.pipe(fs.createWriteStream('URL.png'));
    console.log(req.body);
    //   res.send("url");
        res.sendFile(dir+"/URL.png")

})



//  function geturl(req,res,next){
//     url=req.body["url"];
//     fs.writeFile("url.txt",url, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//       });

//        var img = qr.image(url, {"ec_level":"H" });
//        img.pipe(fs.createWriteStream('URL.png'));
    
// next();

// }


