const helpers = {

    isAuthenticated: function(req, res, next) {
        if (!req.user) {
            res.status(401).json({msg: 'Please login'});
            return;
        }
        next();
    },

    handleErrors: function(err) {
        let errors = {username: '', firstname: '', lastname: '', email: '', password: ''};

        // Check for duplicates
        if (err.code === 11000) {
            errors[Object.keys(err.keyValue)[0]] = 
                `${Object.values(err.keyValue)[0]} is already registered!`
        }

        // Check for missing fields
        if (err.message.includes('User validation failed')) {
            Object.values(err.errors).forEach(({properties}) => {
                errors[properties.path] = properties.message
            });
        }

        return errors;
    },

    handleNewPoolErrors: function(err) {
        let errors = {name: '', league: ''};

        // Check for missing fields
        if(err.message.includes('Pool validation failed')) {
            Object.values(err.errors).forEach(({properties}) => {
                errors[properties.path] = properties.message
            });
        }

        return errors;
    }



};

module.exports = helpers;