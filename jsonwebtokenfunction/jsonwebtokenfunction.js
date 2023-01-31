const express = require("express");
const router = express.Router();
const converter = require('@tryghost/html-to-mobiledoc');


jwt = require("jsonwebtoken");
const convertedstring=JSON.stringify(converter.toMobiledoc('<p><div>Nice lah<p>Hello World!</p></div></p>'))
console.log(typeof(convertedstring))

router.get("/jwt", (req, res) => {
  try {
    const key =
      "63d8b9470d7ca27658e03e65:713aec4174f4b71dafb08d3b97caf318a662e57ec808dc61ce82ee9b7cdb1c35";

    // Split the key into ID and SECRET

    const [id, secret] = key.split(":");

    // Create the token (including decoding secret)

    const token = jwt.sign({}, Buffer.from(secret, "hex"), {
      keyid: id,
      algorithm: "HS256",
      expiresIn: "1h",
      audience: `/admin/`,
    });

    console.log(token);
   
    res.status(200).json({ token: "Ghost " + token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message:"some error" });
  }
});

module.exports = router;
