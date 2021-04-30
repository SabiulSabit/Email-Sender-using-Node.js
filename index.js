const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    service: "gmail", // replace it with your mail service name like: yahoo etc.
    auth: {
        user: "", // Your Mail Address 
        pass: "", // Your Mail Password
    }
})

let mailOption = {
    from: "Support from XYZ <>", // Writer user mail inside <xyz@gmial.com>
    to: "abc@gmail.com", // where you want to send the mail
    subject: "Mail Subject",
    html: ` <h1>Hello From Sabit </h1> ` // Your Custome Mail
}

transport.sendMail(mailOption, (err,result) =>{
    if(err){
        throw err;
    }
    else{
        console.log("Mail Send Done");
    }
})
