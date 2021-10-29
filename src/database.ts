import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: process.env.DATABASE_HOST || 'localhost',
        user: 'root',
        database: 'geo_users',
        connectionLimit: 10
    });
    return connection;
}