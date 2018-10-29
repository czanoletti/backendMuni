const bodyParser = require('body-parser');
const cors = require('cors');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');

// setup global middleware here
module.exports = (app) => {
    app.use(cors());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(compression());
    app.use(helmet());
    app.use(cookieParser());
};
