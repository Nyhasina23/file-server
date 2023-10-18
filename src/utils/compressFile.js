const { createGzip } = require("node:zlib");
const { pipeline } = require("node:stream");
const { deflate, unzip } = require("node:zlib");
const { createReadStream, createWriteStream } = require("node:fs");

function compressFile(file, fileName) {
  const gzip = createGzip();
  const source = createReadStream(file);
  const destination = createWriteStream(`${fileName}.gz`);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
}

function decompressFile(input) {
  deflate(input, (err, buffer) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
    console.log(buffer.toString("base64"));
  });

  const buffer = Buffer.from("eJzT0yMAAGTvBe8=", "base64");
  unzip(buffer, (err, buffer) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
    console.log(buffer.toString());
  });
}

module.exports = { compressFile, decompressFile };
