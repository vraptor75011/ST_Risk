import { Client, ClientConfig } from 'pg';

const createDatabasePerTest = async (databaseName: string) => {
    
    const config: ClientConfig = {
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        host: process.env.PG_HOST,
        port: +(process.env.PG_PORT as string),
        ssl: JSON.parse(process.env.PG_USE_SSL as string)// as any | undefined        
    }

    const client = new Client(config);

    await client.connect();
    await client.query(`CREATE DATABASE "${databaseName}"`)
    await client.end()
}

export default createDatabasePerTest;