const server = require("./src");
const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
