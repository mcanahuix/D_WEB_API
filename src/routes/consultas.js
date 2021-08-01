const {Router}  = require ('express');
const router = Router();
const _ = require ('underscore');

const regist = require('../sample.json');
router.get('/', (req, res) => {
    res.json(regist);
});


router.post('/', (req, res) => {
    const {titulo, director, anio, puntos} = req.body;
    if (titulo && director && anio && puntos){ 
   const id  = regist.length + 1;
    const nuevoregis = {id, ...req.body };
    regist.push(nuevoregis);
    res.json(regist);

    console.log (nuevoregis)
    res.json('guardado'); 
}       else
    {
        res.status(500).json('error');
    }
});


/*
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, director, anio, puntos} = req.body;
    if (titulo && director && anio && puntos) {
        _.each(registr, (regist, i) => {
            if (regist.id === id) {
                regist.titulo = titulo;
                regist.director = director;
                regist.anio = anio;
                regist.puntos = puntos;
            }
        });
        res.json(registr);
    } else {
        res.status(500).json({error: 'hay campos incompletos'});
    }
});
*/



router.delete('/:id', (req, res)=> {
    const {id} = req.params;
    _.each (regist, (  registr ,i) => {
        if (registr.id == id) {
            regist.splice(i, 1);
        }
    });
    res.send(regist);
});

module.exports = router;