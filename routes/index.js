var express = require("express");
const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");
const mongodb = require("./mongodb");
var router = express.Router();
var collects = require("./mongodb");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "OWG" });
});
router.get("/signup", function (req, res, next) {
  res.render("signup");
});

router.get("/farcry", function (req, res, next) {
  res.render("farcry");
});
router.get("/games/farcry", function (req, res, next) {
  res.render("farcry");
});
router.get("/Hitman", function (req, res, next) {
  res.render("Hitman");
});
router.get("/games/Hitman", function (req, res, next) {
  res.render("Hitman");
});
router.get("/Ghostrunner", function (req, res, next) {
  res.render("Ghostrunner");
});
router.get("/games/Ghostrunner", function (req, res, next) {
  res.render("Ghostrunner");
});

router.get("/god", function (req, res, next) {
  res.render("god");
});
router.get("/games/god", function (req, res, next) {
  res.render("god");
});
router.get("/gta", function (req, res, next) {
  res.render("gta");
});
router.get("/games/gta", function (req, res, next) {
  res.render("gta");
});
router.get("/index", function (req, res, next) {
  res.render("index");
});
router.get("/indx", function (req, res, next) {
  res.render("indx");
});
router.get("/home", function (req, res, next) {
  res.render("home");
});
router.get("/reviews", function (req, res, next) {
  res.render("reviews");
});
router.get("/games/home", function (req, res, next) {
  res.render("home");
});
router.get("/games/reviews", function (req, res, next) {
  res.render("reviews");
});
router.get("/games", function (req, res, next) {
  res.render("games");
});
router.get("/games/games", function (req, res, next) {
  res.render("games");
});
router.get("/games/watchdogs", function (req, res, next) {
  res.render("watchdogs");
});
router.get("/watchdogs", function (req, res, next) {
  res.render("watchdogs");
});
router.get("/Sniper", function (req, res, next) {
  res.render("Sniper");
});

router.get("/games/Sniper", function (req, res, next) {
  res.render("Sniper");
});

router.post("/sigin", async (req, res) => {
  const data = {
    Email: req.body.uemail,
    Password: req.body.upassword,
  };
  await collects.insertMany([data]);

  res.render("index");
});
router.post("/indx", async (req, res) => {
  try {
    const check = await collects.findOne({ Email: req.body.uemail });
    if (check.Password == req.body.upassword) {
      res.render("home");
    } else {
      res.render("errors");
    }
  } catch {
    res.render("er");
  }
});
router.get('/details',(req,res)=>{
  collects.find((err,result)=>{
    if(err) throw err;
    res.render('details',{r:result})
  })
  
})

module.exports = router;
