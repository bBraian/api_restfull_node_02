import knex from "knex";

export const config = {
    client: 'sqlite',
    connection: {
        filename: './db/app.db'
    },
    useNullAsDefault: true,
    migrations: {
        directory: './db/migrations'
    }
}

export const setupKnex = knex(config);