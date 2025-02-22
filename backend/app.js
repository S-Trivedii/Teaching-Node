import express from "express";
import connectDB from "./db/db.js";

import router from "./routes/user.route.js";

// Initalising an app
const app = express();

// Middleware
app.use(express.json());

// API's

// Sign up / Register
// app.post("/app/v1/user/signup", async (req, res) => {
//   const { firstname, lastname, email, number, password } = req.body;

//   // Check all the fields should be filled
//   if (!firstname || !lastname || !email || !number || !password) {
//     return res.status(400).json({
//       success: false,
//       message: "Something is missing",
//     });
//   }

//   // Check if email already exist
//   const user = await User.findOne({ email }); // single document or null
//   if (user) {
//     return res.status(400).json({
//       message: "User already exist",
//       success: false,
//     });
//   }

//   // Hashing the password
//   const hashPassword = await bcrypt.hash(password, 12);

//   // create and save document also return a newly created user document
//   const newUser = await User.create({
//     firstname,
//     lastname,
//     email,
//     number,
//     password: hashPassword,
//   });

//   return res.status(201).json({
//     message: "Account created successfully",
//     success: true,
//     userId: newUser._id,
//   });
// });

// // Login
// app.post("/app/v1/user/signin", async (req, res) => {
//   // Match if email exist in db. If yes, then user exist, if not first create/register your account

//   const { email, password } = req.body;

//   // Email or password doen't typed
//   if (!email || !password) {
//     return res.status(404).json({
//       message: "Something is missing",
//       success: false,
//     });
//   }

//   // Check if user exist
//   let user = await User.findOne({ email });
//   if (!user) {
//     return res.status(400).json({
//       message: "Incorrect email",
//       success: false,
//     });
//   }

//   // Password match
//   const isPasswordMatch = await bcrypt.compare(password, user.password); // true or false
//   if (!isPasswordMatch) {
//     return res.status(400).json({
//       message: "Incorrect password",
//       success: false,
//     });
//   }

//   // Token generation

//   // payload
//   const tokenData = {
//     userId: user._id,
//   };

//   const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
//     expiresIn: "90d",
//   });

//   return res.status(200).json({
//     message: "Token generated successfully",
//     token,
//     success: true,
//   });
// });

// Routing
app.use("/app/v1/user", router);
app.use("/app/v1/user", router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Listening or port number ${PORT}`);
});

// User Logs In → Sends email & password to the server.
// Server Verifies Credentials → If valid, it creates a token (e.g., JWT).
// Token Sent to Client → The token is sent in the response and stored (localStorage, sessionStorage, or HTTP-only cookie).
// Client Sends Token in Requests → On subsequent requests, the client includes the token in the Authorization header.
// Server Validates Token → If valid, access is granted; otherwise, access is denied.
