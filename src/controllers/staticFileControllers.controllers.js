
const {
  StaticFileServices,
} = require("../services/staticFileServices.services");
class StaticFileController {
  //upload
  static upload = async (req, res) => {
    try {
      const response = await StaticFileServices.upload(req);
      res.status(response.status).send(response.data);
    } catch (error) {
      res.status(500).send("Error on upload file");
    }
  };
}

module.exports = { StaticFileController };
