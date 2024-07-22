// pages/api/user/send-reset-email.js

// import { UserModel } from "@/models/userModel";
// import jwt from 'jsonwebtoken'
// import { connectDb } from "@/config/dbConnection";
// import transporter from "@/config/emailConfig";


// connectDb()

// export default async function handler(req, res) {

//     if (req.method === 'POST') {
//         const { email } = req.body

//         if (email) {
//             const user = await UserModel.findOne({ email: email })
//             if (user) {
//                 const secret = user._id + process.env.JWT_SECRET_KEY
//                 const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '15m' })
//                 const link = `${process.env.BASE_URL}/reset/${user._id}/${token}`
//                 console.log(link)
//                 // Send Email (Uncomment this code for actual email sending)
//                 // let info = await transporter.sendMail({
//                 //   from: process.env.EMAIL_FROM,
//                 //   to: user.email,
//                 //   subject: "GeekShop - Password Reset Link",
//                 //   html: `<a href=${link}>Click Here</a> to Reset Your Password`
//                 // })
//                 res.status(200).json({ status: 'success', message: 'Password Reset Email Sent... Please Check Your Email' })
//             }
//             else {
//                 res.status(400).json({ status: 'failed', message: "Email doesn't exist" })
//             }
//         }
//         else {
//             res.status(400).json({ status: 'failed', message: 'Email Field is Required' })
//         }
//     }
//     else {
//         res.status(405).json({ status: 'failed', message: 'Method not allowed' })
//     }
// }