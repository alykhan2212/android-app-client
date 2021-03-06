require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DATABASE_URL } = process.env;

module.exports = {
    "development": {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: "database_dev",
        host: DB_HOST,
        dialect: "postgres"
    },
    "test": {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: "database_test",
        host: DB_HOST,
        dialect: "postgres"
    },
    "production": {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        protocol: 'postgres',
        use_env_variable: 'DATABASE_URL'
    }
}
