// bring in express
const express = require('express');

// create express router
const router = express.Router();

// link to projects
const ProjectModel = require('../modelInfo/projectModel');

// GET projects
router.get('/', async (req, res) => {
    try {
        const pm = await ProjectModel.get()
        res.status(200).json(pm)
    } catch (error) {
        res.status(500).json({
            message: "The project information could not be retrieved"
        })
    }
});

// GET project with specific ID
router.get('/:id', async (req, res) => {
    try {
        const pm = await ProjectModel.get(req.params.id)
        if (pm) {
            res.status(200).json(pm)
        } else {
            res.status(404).json({
                message: "The project with the specific ID does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "The project information could not be retrieved"
        })
    }
});


//GET project actions
router.get('/:id/actions', async (req, res) => {
    try {
        const pm = await ProjectModel.getProjectActions(req.params.id)
        if (pm) {
            res.status(200).json(pm)
        } else {
            res.status(404).json({
                message: "The project with specific ID and action does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "The project action information could not be retrieved"
        })
    }
});


// INSERT a new project
router.post('/', async (req, res) => {
    try {
        const post = await ProjectModel.insert(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({
            message: "Please provide all the content necessary"
        })
    }
});

// UPDATE a project
router.put('/:id', async (req, res) => {
    try {
        const pm = await ProjectModel.update(req.params.id, req.body)
        if (pm) {
            res.status(200).json(pm)
        } else {
            res.status(404).json({ 
                message: "The project with the specifid ID does on exist"})
        }
    } catch (error) {
        res.status(500).json({
            message: "The project information could not be modified"
        })
    }
});

// REMOVE a project
router.delete('/:id', async (req, res) => {
    try {
        const count = await ProjectModel.remove(req.params.id)
        if(count > 0){
            res.status(200).json({
                message: "The project has been deleted"
            })
        } else {
            res.status(404).json({
                message: "The post with the specific ID does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "The post could not be removed"
        })
    }
});

module.exports = router;