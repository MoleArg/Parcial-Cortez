const db = require('../database/models');

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => res.json(movies))
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => res.json(movie));
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => res.json(movies));
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: { [db.Sequelize.Op.gte]: 8 }
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.json(movies);
            });
    },
    
    create: function (req, res) {
        
        db.Movie.create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        .then(() => console.log("Creacion con exito"))
        .catch(err => console.log(err))
    },
    update: function (req, res) {
        let movieId = req.params.id;

        db.Movie.update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: { id: movieId }
            })
            .then(() => console.log("Actualizado con exito"))
            .catch(err => console.log(err))
    },
    
    destroy: function (req, res) {
        let movieId = req.params.id;
        Movies
            .destroy({ where: { id: movieId }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then(() => console.log("Eliminado con exito"))
            .catch(err => console.log(err))
    }
}

module.exports = moviesController;