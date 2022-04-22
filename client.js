const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("data", data => {
    console.log(`Server says: ${data}`);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: YYY");
  });

  return conn;
};

module.exports = {
  connect
};