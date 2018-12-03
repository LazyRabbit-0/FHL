const express = require("express");
const cors = require("cors");
const host = express();
const fs = require("fs");
const path = require("path");

host.use(cors());

host.use(express.static("pics"));

host.listen(4000, () => console.log("FHL secret base on port 4000!"));
