const{Router} = require('express');
const router = Router();

router.get('/index', (req, res) =>{
    const data = {
        "nombre" : "Mariano Galvez",
        "curso" :  "Desarrollo web"
    };
    res.json(data);
    });

module.exports = router;