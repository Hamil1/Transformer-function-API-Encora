const Router = require("express").Router;
let router = Router();
const v1 = require("./v1/file.route");

// TRANSFORMER FUNCTION API ROUTES

//root route
router.get("/api", (req, res) => {
  res.send("Transformer API working...");
});

// V1 API routes
router.use("/api/v1", v1);

module.exports = router;
