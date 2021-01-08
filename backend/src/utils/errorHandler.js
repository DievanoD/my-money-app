const _ = require('lodash');

module.exports = (bundle) => {
    if (bundle.errors) {
        const errors = parseErrors(bundle.errors);
        return { errors };
    }
}

const parseErrors = (nodeErrors) => {
    const errors = [];

    _.forIn(nodeErrors, error => errors.push(error.message));
    return errors;
}