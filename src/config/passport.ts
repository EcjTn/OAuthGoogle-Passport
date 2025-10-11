import passport from 'passport'
import { Strategy as GoogleStrategy, type StrategyOptions} from 'passport-google-oauth20'

//To get ClientID and ClientSecret
//Visit: https://developers.google.com/workspace/guides/manage-credentials

const clientIdGoogle = process.env.GOOGLE_CLIENT_ID
const clientSecretGoogle = process.env.GOOGLE_CLIENT_SECRET
if(!clientIdGoogle || !clientSecretGoogle) throw new Error("x")


const googleStratOptions: StrategyOptions = {
    clientID: clientIdGoogle,
    clientSecret: clientSecretGoogle,
    callbackURL: 'http://localhost:7777/auth/callback',
}
//https://github.com/EcjTn/OAuthGoogle-StratTest.git
passport.use(new GoogleStrategy(googleStratOptions,
    (accessToken, refreshToken, profile, done) => {
        //this part you'd want to check if user
        //exists in db or save one.
        return done(null, profile)
    }))
