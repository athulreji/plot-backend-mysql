const express = require("express");
const app = express();
const path = require("path");;
const cors=require("cors");
app.use(express.json());

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "config.env") });
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors())

//send response api is working 
app.get("/", (req, res) => {
  res.send("API is working");
});
app.use("/auth", require("./routes/auth"));
app.use("/lease", require("./routes/lease"));
app.use("/share", require("./routes/share"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening at ${PORT}`));
