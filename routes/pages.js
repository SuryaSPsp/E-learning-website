const express=require("express");
const router=express.Router();
const userController=require('../controllers/users');

router.get(["/","/login"],(req,res)=>{
    res.render("login");
});

router.get("/register",(req,res)=>{
    res.render("register");
});

router.get("/react",userController.isLoggedIn, (req, res) => {
    //console.log(req.name);
    if (req.user) {
      res.render("react", { user: req.user });
    } else {
      res.redirect("/login");
    }
  });


router.get("/node",userController.isLoggedIn, (req, res) => {
    //console.log(req.name);
    if (req.user) {
      res.render("node", { user: req.user });
    } else {
      res.redirect("/login");
    }
  });


router.get("/python",userController.isLoggedIn, (req, res) => {
    //console.log(req.name);
    if (req.user) {
      res.render("python", { user: req.user });
    } else {
      res.redirect("/login");
    }
  });

router.get("/testing",userController.isLoggedIn, (req, res) => {
    //console.log(req.name);
    if (req.user) {
      res.render("testing", { user: req.user });
    } else {
      res.redirect("/login");
    }
  });


router.get("/agile",userController.isLoggedIn, (req, res) => {
    //console.log(req.name);
    if (req.user) {
      res.render("agile", { user: req.user });
    } else {
      res.redirect("/login");
    }
  });


router.get("/devops",userController.isLoggedIn, (req, res) => {
    //console.log(req.name);
    if (req.user) {
      res.render("devops", { user: req.user });
    } else {
      res.redirect("/login");
    }
  });


router.get("/angular",userController.isLoggedIn, (req, res) => {
    //console.log(req.name);
    if (req.user) {
      res.render("angular", { user: req.user });
    } else {
      res.redirect("/login");
    }
  });

router.get("/java",userController.isLoggedIn, (req, res) => {
    //console.log(req.name);
    if (req.user) {
      res.render("java", { user: req.user });
    } else {
      res.redirect("/login");
    }
  });

router.get("/nav",(req,res)=>{
    res.render("navbar");
});

router.get("/dashboard", userController.isLoggedIn, (req, res) => {
    //console.log(req.name);
    if (req.user) {
      res.render("dashboard", { user: req.user });
    } else {
      res.redirect("/login");
    }
  });

router.get("/home", userController.isLoggedIn, (req, res) => {
    //console.log(req.name);
    if (req.user) {
      res.render("home", { user: req.user });
    } else {
      res.redirect("/login");
    }
  });

module.exports=router;
