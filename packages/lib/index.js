const config = require('config');

module.exports = {
    salute: (extra) => { return `${config.get('salute')} + ${extra}`; }
}