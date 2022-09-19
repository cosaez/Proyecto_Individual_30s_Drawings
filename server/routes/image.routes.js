const ImageController = require('../controllers/image.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post("/api/image/create", ImageController.createImage)
    app.get("/api/images", ImageController.getAll)
    app.get("/api/image/:id", ImageController.findImage)
    app.put("/api/image/:id", ImageController.updateImage)
    app.delete("/api/image/:id", ImageController.deleteImage)
}
// module.exports = app => {
//     app.post("/api/image/create", authenticate, ImageController.createImage)
//     app.get("/api/images", authenticate, ImageController.getAll)
//     app.get("/api/image/:id", authenticate, ImageController.findImage)
//     app.put("/api/image/:id", authenticate, ImageController.updateImage)
//     app.delete("/api/image/:id", authenticate, ImageController.deleteImage)
// }