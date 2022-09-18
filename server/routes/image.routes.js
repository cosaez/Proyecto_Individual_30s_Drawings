const ImageController = require('../controllers/image.controller');

module.exports = app => {
    app.post("/api/image/create", ImageController.createImage)
    app.get("/api/images", ImageController.getAll)
    app.get("/api/image/:id", ImageController.findImage)
    app.put("/api/image/:id", ImageController.updateImage)
    app.delete("/api/image/:id", ImageController.deleteImage)
}