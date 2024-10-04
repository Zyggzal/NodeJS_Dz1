const {Router} = require('express');
const Student = require('../models/Student');
const Group = require('../models/Group');
const fs = require('fs');
const path = require('path');

const router = Router();
router.get('/', async (req, res)=>{
    res.render('students', { students : await Student.getAll()})
})
router.get('/add', async (req, res)=>{
    res.render('addStudent', { groups : await Group.getAll() })
})
router.post('/add', async (req, res)=>{
    var students = await Student.getAll();
    students.push({ name : req.body.name, age : req.body.age, groupId : req.body.groupId, id : students.slice(-1).pop().id + 1})
    fs.writeFile(path.join(__dirname, '..', 'data', 'students.json'), JSON.stringify(students), (err, data)=>{
        res.render('students', { students : students })
    })
})
module.exports = router;