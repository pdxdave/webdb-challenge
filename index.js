// connect to server
const server = require('./server');

server.listen(5010, () => {
    console.log("Server is running on port 5010")
})