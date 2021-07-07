// bring in express
const express = require('express');

// create a server
const server = express();

// bring in extra tools
const cors = require('cors');
const helmet = require('helmet');

// middleware
server.use(helmet());
server.use(express.json());
server.use(logger);
server.use(cors());

// router
const ActionRouter = require('./data/routerInfo/actionRouter');
const ProjectRouter = require('./data/routerInfo/projectRouter');

server.use('/api/action', ActionRouter);
server.use('/api/project', ProjectRouter);

// test output
server.get('/', (req, res) => {
    res.send("This is a test page")
});

function logger(req, res, next){
    console.log(`${req.method} Request`)
    next();
}

module.exports = server;