const mongoose = require('mongoose');
const Recipe = mongoose.model('recipe');

module.exports = (app) => {
    app.post('/api/add-recipe', (req, res) => {

        new Recipe(req.body)
            .save((err, result) => {
                if (err) { res.send({ error: err.message }); }
                res.send({ success: result });
            });
    });

    app.get('/api/get-recipes', (req, res) => {
        const recipes = Recipe.find({});

        recipes.exec((err, result) => {
            if (err) { res.send({ error: err.message }); }
            res.send({ success: result });
        })
    });

    app.post('/api/delete-recipe', (req, res) => {

        Recipe.findById(
            req.body._id, // recipe ID
            (err, doc) => {
                if (err) { res.send(err.message); }
                doc.remove((err) => {
                    if (err) { res.send({ error: err.message }); }
                    res.send({ success: 'document deleted.'});
                })
            });
    });

    app.post('/api/update-recipe', (req, res) => {
        Recipe.update(
            {_id: req.body._id},
            req.body,
            (err) => {
                if (err) { res.send({ error: err.message }); }
                res.send({ success: 'document updated' });
            }
        )
    });
};