// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebritiy = require('../models/Celebrity.model');

router.get('/create', (req, res) => {
    res.render('celebrities/new-celebrity');

});
router.post('/create', (req, res) => {
    const { name, occupation, catchPhrase } = req.body;

    const newCelebrity = new Celebritiy({
        name,
        occupation,
        catchPhrase
    });

    newCelebrity.save()
    .then(()=>{
        res.redirect('/celebrities');
    })
    .catch((err)=> {
        res.render('celebrities/new-celebrity', {error: err.message});
    });
});
// all your routes here

module.exports = router;