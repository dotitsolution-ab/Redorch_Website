// cPanel CloudLinux Node.js Selector friendly startup file.
// The packaged build runs from ./standalone so the app root never needs a real
// node_modules folder. cPanel/Passenger still starts this file from app root.
const fs = require("fs");
const path = require("path");

process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.HOSTNAME = "0.0.0.0";
process.env.NEXT_TELEMETRY_DISABLED = "1";

if (!process.env.PORT && process.env.NODE_PORT) {
  process.env.PORT = process.env.NODE_PORT;
}

const standaloneServer = path.join(__dirname, "standalone", "server.js");
const rootServer = path.join(__dirname, "server.js");

if (fs.existsSync(standaloneServer)) {
  require(standaloneServer);
} else {
  require(rootServer);
}
