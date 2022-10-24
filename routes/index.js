const express = require('express');
const indexController = require("../controllers/indexController");
const path = require('path');
const router = express.Router();
const multer = require("multer");

const multerDiskstorage = multer.diskStorage({
  destination: (req, file, callback)=> {
   const folder = path.join(__dirname, '../public/profile');
   callback(null, folder);
  },
  filename: (req, file, callback) => {
    const imageName = Date.now() + file.originalname;
    callback(null, imageName);
  }
});

 const upload = multer({ storage: multerDiskstorage });
/* GET home page. */
router.get("/", indexController.viewcadastro);
router.post("/cadastro", upload.single('nome'), indexController.salvarCadastro);

module.exports = router;