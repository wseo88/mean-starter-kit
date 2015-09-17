module.exports = function(express) {

    // instantiate router ======================================================
    var router = express.Router();

    // router middleware ========================================================

    // api routes ==============================================================
    router.get('/sample', function(req, res) {
        res.send('API sample');
    });

    return router;
};
