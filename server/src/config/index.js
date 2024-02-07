module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI:
    process.env.MONGO_URI || 'mongodb://lms_mongo:27017/lms', //change the url
  SECRET_KEY: process.env.SECRET_KEY || 'my-secret-key',
  TOKEN_DURATION: process.env.TOKEN_DURATION || '1h',
};
