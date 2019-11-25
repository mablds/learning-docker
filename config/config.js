const express = require('express');


module.exports.setUpServer = () => {
    const router = require('../controllers/index.js')
    const app = express();
    
//    app.use(bodyParser.json());
//    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use(express.json());

    app.use(router);
    
    return app;
}

