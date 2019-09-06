const jwt = require('express-jwt');
const jwtRsa = require('jwks-rsa');

module.exports = jwt({
  credentialsRequired: process.env.NODE_ENV !== 'test',
  secret: jwtRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri:'https://maxthecat.auth0.com/.well-known/jwks.json'
  }),
  audience: 'CHuOJRfmi1vcryi5wa0PEruZA5bfMfp2',
  issuer: 'https://maxthecat.auth0.com',
  algorithms: ['RS256']
});
