# Email-Sender-using-Node.js
Send Email Using Node.js



## Change index.js File
```js
   auth: {
        user: "", // Your Mail Address 
        pass: "", // Your Mail Password
    }
```

```js
let mailOption = {
    from: "Support from XYZ <>", // Writer user mail inside <xyz@gmial.com>
    to: "abc@gmail.com", // where you want to send the mail
    subject: "Mail Subject",
    html: ` <h1>Hello From Sabit </h1> ` // Your Custome Mail
}
```
## How to Run?

* Open CMD in the folder location and run: `npm install`
* After installation, run: `node index.js`


## If Your Are Using Gmail

Enable: [https://myaccount.google.com/lesssecureapps](https://myaccount.google.com/lesssecureapps)  
