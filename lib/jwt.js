import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "secretdev";

export function generateToken(user) {
  return jwt.sign({ userId: user._id }, SECRET, { expiresIn: "365d" });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return null;
  }
}
