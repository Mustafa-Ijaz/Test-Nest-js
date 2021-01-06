import { ConfigurationInterface } from './configuration.interface';

export default (): ConfigurationInterface => ({
  mongodb: {
    uri: `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_DATABSE}`,
    user: process.env.MONGO_DB_USER,
    pass: process.env.MONGO_DB_PASSWORD,
    useCreateIndex: true,
    useNewUrlParser: true,
  },

});