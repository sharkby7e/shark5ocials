const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => res.send("Please Check the URL you have entered"));

module.exports = router;
