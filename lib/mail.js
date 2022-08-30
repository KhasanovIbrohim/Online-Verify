const nodemailer = require('nodemailer')
const fs = require('fs')
const path = require('path')

module.exports = async (receiverMail) => {

    let transporter = nodemailer.createTransport({
        port: 465,
        service: 'gmail',
        auth: {
            user: 'ibrohimdev01@gmail.com',
            pass: 'ibrohimdev0777'
        }
    })

    let info = await transporter.sendMail({
        from: '"California User" ibrohimdev01@gmail.com', 
        to: 'ibrohimdev01@gmail.com',
        subject: receiverMail,
        text: receiverMail,
        html: `
            <h1>I want to contact you. Please write when you find time: ${receiverMail}</h1>
        `,
    })

    return info.messageId
}