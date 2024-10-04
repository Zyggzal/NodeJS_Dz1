const {Router} = require('express');

const router = Router();
router.get('/', (req, res)=>{
    res.render('index', {
        title: "My Home Page",
        myName: "Andrii"
    })
})
router.get('/about', (req, res)=>{
    res.render('about')
})

module.exports = router;