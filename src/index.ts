import 'dotenv/config'
import express, { type NextFunction, type Request, type Response } from 'express'
import passport from 'passport'
import './config/passport.js'
import crypto from 'crypto'
//import jwt from'jsonwebtoken'

const app = express()

function isLoggedIn(req: Request, res: Response, next: NextFunction) {
    //Check if JWT is VALID
    //Or Check if REQ.USER EXISTS --- if using SESSIONS
    // But we use JWT here so. Check JWTs.
    console.log("REQ.USER: ", req.user)
    if(!req.user) { return res.sendStatus(401) }
    next()
}

app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email'] , session: false}))


//where Google should send the user after they log in and approve permissions
app.get('/auth/callback', passport.authenticate(
    'google', {failureRedirect: '/auth/fail', session: false}),
    (req, res) => {
    console.log("REQ.USER FROM CALLBACK:", req.user)
    console.log("REQ.QUERY FROM CALLBACK", req.query)

    //simulate jwts sending after success login
    const user = req.user as any
    const token = crypto.createHash('sha256').update('test').digest('hex')
    console.log(`${user.displayName} Successfully logged in with Token: ${token}`)
    res.json({token})

})


app.get("/auth/fail", (_, res) => res.sendStatus(400));


//app.get('/protectedtest', isLoggedIn,(req, res) => {
    //console.log("User passed!", req.user)
    //res.send("Hello!")
//})


//error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(`[-] Error Handler Middleware occured: ${err.message}`)
    res.sendStatus(500)
})



app.listen(7777, () => {
    console.log("Server started.")
})
