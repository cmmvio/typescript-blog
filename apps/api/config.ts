import * as dotenv from "dotenv";
dotenv.config();

export default {
    env: process.env.NODE_ENV,

    server: {
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 3000,
    },

    repository: {
        type: 'sqlite',
        database: "./database.sqlite",
        synchronize: true,
        logging: false,
    },

    auth: {
        localRegister: true,
        localLogin: true,
        jwtSecret: process.env.JWT_SECRET || 'secret',
        jwtSecretRefresh: process.env.JWT_SECRET_REFRESH || 'secret',
        expiresIn: 60 * 60 * 24
    }
}
