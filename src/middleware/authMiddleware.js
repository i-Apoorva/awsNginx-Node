global.fetch = require('node-fetch');
global.navigator = () => null;

const config = require('../config/config');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jsonwebtoken = require('jsonwebtoken');

const poolData = {
    UserPoolId: "us-east-2_NpSyc7LfS",
    ClientId: "3ctpoku7c6eutjgn8g0he333d7"
};

const pool_region = "us-east-2";
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

exports.Validate = function (req, res, next) {
    var token = req.session.authorization || req.headers['authorization'];
    request({
        url: `https://cognito-idp.${pool_region}.amazonaws.com/${poolData.UserPoolId}/.well-known/jwks.json`,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            pems = {};
            var keys = body['keys'];
            for (var i = 0; i < keys.length; i++) {
                var key_id = keys[i].kid;
                var modulus = keys[i].n;
                var exponent = keys[i].e;
                var key_type = keys[i].kty;
                var jwk = { kty: key_type, n: modulus, e: exponent };
                var pem = jwkToPem(jwk);
                pems[key_id] = pem;
            } 
            var decodedJwt = jsonwebtoken.decode(token, { complete: true });
            if (!decodedJwt) {
                console.log("Not a valid JWT token");
                res.status(401);
                return res.redirect('/login')
                
            }
            var kid = decodedJwt.header.kid;
            var pem = pems[kid];
            if (!pem) {
                console.log('Invalid token');
                //res.status(401);
                return res.redirect('/login')
                
            }
            jsonwebtoken.verify(token, pem, function (err, payload) {
                if (err) {
                    console.log("Invalid Token.");
                    return res.redirect('/login')
                
                } else {
                    console.log("Valid Token.");
                    return next();
                }
            });
        } else {
            console.log("Error! Unable to download JWKs");
            res.status(500);
            return res.send("Error! Unable to download JWKs");
        }
    });
}