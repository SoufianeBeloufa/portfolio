const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const mailSender=require('./mail_sender');
const port = 5000;
const app = express();
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.json());


///************************************************ */
app.post("/send_email", mailSender.sendEmail);


app.listen(port, err => {
        if (err) throw err
        else
            console.log("Sever is listening to Port number :" + port);
    })
    