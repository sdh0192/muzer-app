const express = require('express');
const router = express.Router();
const multer  = require('multer');
const UploadController = require('../controllers/UploadController');
const Authenticated = require('../validation/ensureAuthenticated');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './client/build/uploads/')
    },
    filename: function (req, file, cb) 
    {
        let last = file.originalname.lastIndexOf('.');
        let ext = file.originalname.substring(last, file.originalname.length);
        cb(null, `${req.user.id}-${Date.now()}${ext}`);
    }
});

const upload = multer({ storage: storage });


router.post("/upload", [Authenticated, upload.single('test')], UploadController.postFile);

module.exports = router;