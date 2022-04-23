const { ACTION_KEYS } = require("./constants");

let connection;

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }

  if (Object.keys(ACTION_KEYS).includes(key)) {
    connection.write(ACTION_KEYS[key]);
  }
};

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput
};