if(process.env.NODE_ENV === 'production') { // if the node environment is equal to production
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev'); 
}