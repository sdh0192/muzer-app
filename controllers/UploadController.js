
const UploadController = {

    postFile: function (req, res) {
        if(req.file)
        {
            res.json(req.file);
        } 
        else res.json({error: true, message: "file did not uploaded."});
    }
}

module.exports = UploadController;
