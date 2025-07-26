const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('JWT verify error:', error);
    return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
  }
};
