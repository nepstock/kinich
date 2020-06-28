const r = require("jsrsasign");

// id_token
const sJWT =
  "eyJraWQiOiJuZXBzdG9jayIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1NjU0MTdkYi02ODgzLTQ1ZWUtOTQxNy1kYjY4ODMwNWVlNGUiLCJhdWQiOiI2YzExZGM2NC1jNmVhLTRhMjUtOTFkYy02NGM2ZWE2YTI1NmYiLCJ1cGRhdGVkX2F0IjoxNTkwMzc3MjA5MTI1LCJhdXRoX3RpbWUiOjE1OTE4MjE3MzYsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3QvYW0vbmVwc3RvY2svb2lkYyIsInByZWZlcnJlZF91c2VybmFtZSI6Impwa2FydHlAZ21haWwuY29tIiwiZXhwIjoxNTkxODM2MTM2LCJnaXZlbl9uYW1lIjoidGVzdG8iLCJpYXQiOjE1OTE4MjE3MzYsImZhbWlseV9uYW1lIjoidGVzdGkiLCJlbWFpbCI6Impwa2FydHlAZ21haWwuY29tIn0.XvehT2fIDVVzeLpTq-GnslVm4BCZJIEyKtVf07jOoyvjCs06eL4dpFO193t1JaxtBHBnK1pGASMrIUrIVYKPKu-JY8_D7MBfpBUv-LApgRYtAe7tOtmBSaZhH6bB9LBtA3GbqdTgsnYVoFlr6M2C6WR-88USAbpbzAKgs8efzmzpJ43xAVVgTtwz3KKnoxS_wMxKnd0iwvmKsIG2kvoqOS1nXEdBLnBA_GVorUObsmCyB7o3e-sR2PkPdoAq3JcFsI8mHo0X8CVB-n6mHunh_NAp5pUmC25vNV0AVrOxPs4PhCadFTqPox0hdX-nbNN-osQKWDTrqm3tkbINM-E36w";

// get headers
const headerObj = r.KJUR.jws.JWS.readSafeJSONString(r.b64utoutf8(sJWT.split(".")[0]));
console.log("------------------Headers---------------------------");
console.log(headerObj);
// ----------  verify key identifier  ----------

const keyIdentifier = "nepstock" // this should be an env variable
console.log(headerObj["kid"] === "nepstock");


// get user information
const payloadObj = r.KJUR.jws.JWS.readSafeJSONString(
  r.b64utoutf8(sJWT.split(".")[1])
);
console.log("------------------Payload---------------------------");
console.log(payloadObj);
/**
 * sub = user id
 * aud = client secret
 * preferred_username = username
 * given_name = nombres
 * family_name = apellidos
 * email = email
 */
