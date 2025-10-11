import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_KEY


function generateToken(payload: object) {
    if (!secretKey) throw new Error("JWT_KEY UNDEFINED");
    return jwt.sign(payload, secretKey, {expiresIn: '15m'})
}

function verifyToken(token: string) {
    if (!secretKey) throw new Error("JWT_KEY UNDEFINED");
    return jwt.verify(token, secretKey)
}