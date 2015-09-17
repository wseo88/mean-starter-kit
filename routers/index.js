// routers/index.js
var path = require('path');

module.exports = function(express) {

    // instantiate router ======================================================
    var router = express.Router();

    // router middleware ========================================================

    // web routes ==============================================================
    // route to handle all angular requests
    router.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../views') + '/index.html');
    });

    return router;
};
