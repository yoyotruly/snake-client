const { SAY_KEYS, MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY } = require("./constants");

let connection;

const handleUserInput = function(key) {
  switch (key) {
  case MOVE_UP_KEY:
    connection.write("Move: up");
    break;
  case MOVE_LEFT_KEY:
    connection.write("Move: left");
    break;
  case MOVE_DOWN_KEY:
    connection.write("Move: down");
    break;
  case MOVE_RIGHT_KEY:
    connection.write("Move: right");
    break;
  case "\u0003":
    process.exit();
  }

  if (Object.keys(SAY_KEYS).includes(key)) {
    connection.write(`Say: ${SAY_KEYS[key]}`);
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