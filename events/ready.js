const utils = require('../utils');

module.exports = client => {

    client.user.setActivity("BLADE HU BKL", {type: "STREAMING"});

    utils.log(`Logged in as ${client.user.tag} !`);

};