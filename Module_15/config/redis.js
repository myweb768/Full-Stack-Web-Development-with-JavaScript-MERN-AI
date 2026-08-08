import redis from 'redis';

export const redisClient = redis.createClient()

redisClient.on('error', (err)=> console.log('Redis Client Error', err));

(async ()=>{
    await redisClient.connect();
    console.log('Redis Client Connected');
})();
