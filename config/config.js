const express = require('express');

module.exports.setUp = () => {
    const app = express();
    const bodyParser = require('body-parser')

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    //app.use(require('../controllers'))

    return app
}