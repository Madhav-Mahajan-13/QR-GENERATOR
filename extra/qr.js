import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
      "message" : "ENTER THE URL",
      "name":"TEXT",
    //   "type":"checkbox",

    },
  ])
  .then((answers) => {
    // console.log(answers);
    const url = answers.TEXT;

    var img = qr.image(url,{ec_level:'H',});
    img.pipe(fs.createWriteStream("img1.png"));


    fs.writeFile("text.txt",url,(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

    
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      // Something else went wrong
    }
  });