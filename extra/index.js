import qr from "qr-image";
import fs from "fs";
// var qr_svg = qr.image(, {"ec_level":"H" });
// qr_svg.pipe(fs.createWriteStream('qr.png'));

var input;
$("button").click(function(){
    // $("h1").text("this is a beautifull world don't leave").css("color","aqua");
    input = document.getElementById('userinput');
    alert(input.value);
     var img1 = qr.image(input.value, {"ec_level":"H" });
    img1.pipe(fs.createWriteStream('qr.png'));
    

}
)
 



