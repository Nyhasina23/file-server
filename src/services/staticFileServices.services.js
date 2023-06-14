const resizeImg = require("resize-img");
const fs = require("fs");
const { res } = require("../utils/response");
const axios = require("axios");
const download = require("download");
const localIpAddress = require("local-ip-address");
let response = { status: 200, data: "" };
class StaticFileServices {
  //upload and share
  static upload = async (req, response) => {
    try {
      let isSent = true;
      let exitCode = 0;
      //get all filename
      let reqFiles = [];
      for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(req.files[i].filename);
      }
      //test if there is file
      if (reqFiles.length === 0) {
        response = res.status(401).send("No image to upload");
      } else {
        //resize all images
        for (let i = 0; i < req.files.length; i++) {
          const url = req.files[i].path;
          let image = await resizeImg(fs.readFileSync(url), {
            width: 600,
          });
          fs.writeFileSync(url, image);
        }

        response = {
          status: 200,
          data: reqFiles,
        };
        return response;
      }
    } catch (e) {
      console.log(e);
      response = {
        status: 500,
        data: "Cannot upload file",
      };
      return response;
    }
  };
}

module.exports = { StaticFileServices };
