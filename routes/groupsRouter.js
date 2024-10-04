const {Router} = require('express');
const Student = require('../models/Student');
const Group = require('../models/Group');
const fs = require('fs');
const path = require('path');

const router = Router();
router.get('/', async (req, res)=>{
    res.render('groups', { groups : await Group.getAll()})
})
router.get('/add', async (req, res)=>{
    res.render('addGroup')
})
router.post('/add', async (req, res)=>{
    console.log("A");
    var groups = await Group.getAll();
    groups.push({ name : req.body.name, id : groups.slice(-1).pop().id + 1})
    fs.writeFile(path.join(__dirname, '..', 'data', 'groups.json'), JSON.stringify(groups), (err, data)=>{
        res.render('groups', { groups : groups })
    })
})
module.exports = router;