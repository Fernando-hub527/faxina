import {createClient} from "redis"

export async function setRedis(){
    const client = createClient()
    client.on('error', (err: any) => console.log('Redis Client Error', err));

    await client.connect();
    return client
}