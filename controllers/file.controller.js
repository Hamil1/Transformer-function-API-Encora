const fs = require("fs");
const Papa = require("papaparse");
const needle = require("needle");
class FileController {
  //I'm using DI here, so we can change the transformerFunction whenever we want :)
  constructor(transformerFunction) {
    this.transformerFunction = transformerFunction;
  }

  get = (req, res) => {
    const results = [];
    const options = { header: true };

    const file = req?.query?.file
      ? needle.get(req?.query?.file)
      : fs.createReadStream("./uploads/data.csv");

    file
      ?.pipe(Papa.parse(Papa.NODE_STREAM_INPUT, options))
      ?.on("data", (data) => {
        results.push(data);
      })
      ?.on("error", (error) => {
        console.error(error);
        res
          .status(500)
          .send("Error in the server, please reach out to the administrator");
      })
      .on("end", () => {
        this.transformerFunction();
        res.status(200).json(results);
      });
  };

  post = async (req, res) => {
    try {
      if (!req.files) {
        res.status(400).send({
          status: false,
          message: "No file uploaded",
        });
      } else {
        //Use the name of the input field (i.e. "csv") to retrieve the uploaded file
        let csv = req.files.csv;

        //Use the mv() method to place the file in upload directory (i.e. "uploads")
        csv.mv("./uploads/" + csv.name);

        //send response
        res.send({
          status: true,
          message: "File is uploaded",
          data: {
            name: csv.name,
            mimetype: csv.mimetype,
            size: csv.size,
          },
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  };
}

module.exports = FileController;
