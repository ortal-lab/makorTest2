const router = require("express").Router();
const {getData}=require("./getData")

router.get("/getData",getData);

module.exports = router;
