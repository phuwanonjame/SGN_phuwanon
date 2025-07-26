const { loginSchema, registerSchema } = require("../validation/authValidation");
const { authenticateUser, registerUser } = require("../services/authService");
const { getUserFromToken } = require('../services/authService')
exports.login = async (req, res, next) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });

    const { email, password } = value;
    const token = await authenticateUser(email, password);

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
      path: "/", 
    });

    return res.json({ success: true, message: "Login success",Token: token }); 
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { error, value } = registerSchema.validate(req.body);
    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });

    const { name, email, password } = value;
    const userId = await registerUser(name, email, password);

    res.status(201).json({ success: true, userId });
  } catch (error) {
    next(error);
  }
};



exports.getUserInfo = async function (req, res) {
  const token = req.cookies.token
  const user = await getUserFromToken(token)

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  res.json({ user })
}

