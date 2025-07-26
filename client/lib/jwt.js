import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "changeme";

export function signJwt(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
}

export function verifyJwt(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
} 