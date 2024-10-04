const {Router} = require('express');

const router = Router();
router.get('/', (req, res)=>{
    res.render('calc')
})
router.post('/', (req, res)=>{
    let result =  "Error";
    if(req.body.A.length != 0 && req.body.B.length != 0){
        switch(req.body.op){
            case "+": result = parseInt(req.body.A) + parseInt(req.body.B); break;
            case "-": result = parseInt(req.body.A) - parseInt(req.body.B); break;
            case "*": result = parseInt(req.body.A) * parseInt(req.body.B); break;
            case "/": if(req.body.B != "0")result = parseInt(req.body.A) / parseInt(req.body.B);else result = "Can't divide by zero!"; break;
            case "%": result = req.body.A % req.body.B; break;
        }
    }
    else {
        result = "Variables can't be empty!";
    }

    res.render('calc', { "A" : req.body.A, "B" : req.body.B, "op" : req.body.op, "res" : result });
})

module.exports = router;