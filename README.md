# Google OAuth2 + Passport + JWT

An example showing how to use Google OAuth2 with Passport.  
No database, no session storage, just the authentication flow and JWT generation.

## Overview
This project demonstrates how to:
- Authenticate users with Google using Passport’s OAuth2 strategy  
- Replace sessions with a JWT approach  

## Tech
- Node.js  
- Express  
- Passport.js  
- jsonwebtoken 

## Run
```bash
npm install
npm run compile
npm start
```

Set your environment variables
- there's an env example you can follow.

Then open:
```
http://localhost:3000/auth/google
```

## Notes
This is only for testing and learning the flow — nothing gets stored.
