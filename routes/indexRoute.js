
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('<h1>Recipe Book App</h1>');
    })
}