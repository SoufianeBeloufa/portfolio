const nodemailer = require('nodemailer');


module.exports.sendEmail= (req) => {
   const GMAIL="s.beloufa@esi-sba.dz";

    
        console.log(GMAIL);
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: "beloufasoufiane01@gmail.com",
                pass: "v x r m j d j z h r n c s n b r"
            }
        });
        var mailOptions = {
            from: "beloufasoufiane01@gmail.com",
            to: GMAIL,
            subject: 'Portfolio contact',
            text: req.body.email+"_____"+req.body.name+"has sent you this message"+req.body.message
        };
        transporter.sendMail(mailOptions, function(err) {
            if (err)
                // res.json(err);
            throw err;
        });

}