module.exports = function(app){
    var userController = require('../controllers/userController');

    app.route('/api/registration')
        .post(userController.registration);
}