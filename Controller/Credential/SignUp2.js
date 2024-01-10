const student = require("./studentSchema");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const StudentSignUp = async (req, res) => {
  const { name, email, username, password } = req.body;

  const aeEmail = await student.findOne({ email });

  if (aeEmail) {
    return res.json({ message: "email already exist" });
  }

  const salt = await bcrypt.genSalt(5);
  const encrPassword = await bcrypt.hash(password,salt);

  const signupDetails = await student.create({
    name,
    email,
    username,
    password: encrPassword,
  });
  res.json({
    Id: signupDetails._id,
    Email: signupDetails.email,
    Username: signupDetails.username,
    Password: signupDetails.password,
    Token: tokenGenarate(signupDetails._id),
  });
  // res.json(tokenGenarate(signupDetails._id))
};

const tokenGenarate = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
};

module.exports = StudentSignUp;
