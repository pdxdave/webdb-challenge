// bring in express
const express = require('express');

// create express router
const router = express.Router();

// link to projects
const  ActionModel = require('../modelInfo/actionModel');

// GET actions
router.get('/', async (req, res) => {
    try {
        const am = await ActionModel.get()
        res.status(200).json(am)
    } catch (error) {
        res.status(500).json({
            message: "The action information could not be retrieved"
        })
    }
});


// GET actions by ID
router.get('/:id', async (req, res) => {
    try {
        const am = await ActionModel.get(req.params.id)
        if (am) {
            res.status(200).json(am)
        } else {
            res.status(404).json({
                message: "The action with the specific ID does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "The action information could not be retrieved"
        })
    }
});


// INSERT a new action
router.post('/', async (req, res) => {
    try {
        const am = await ActionModel.insert(req.body)
        res.status(201).json(am)
    } catch (error) {
        res.status(500).json({
            message: "Please provide all the necessary content"
        })
    }
});


// UPDATE an action
router.put('/:id', async (req, res) => {
    try {
        const am = await ActionModel.update(req.params.id, req.body)
        if (am) {
            res.status(200).json(am)
        } else {
            res.status(404).json({
                message: "The action with the specific ID does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "The action information could not be modified"
        })
    }
});


// REMOVE an action 
router.delete('/:id', async (req, res) => {
    try {
        const count = await ActionModel.remove(req.params.id)
        if (count > 0) {
            res.status(200).json({
                message: "The action has been deleted"
            })
        } else {
            res.status(404).json({
                message: "The action with the specific ID does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "The post could not be removed"
        })
    }
});


module.exports = router;