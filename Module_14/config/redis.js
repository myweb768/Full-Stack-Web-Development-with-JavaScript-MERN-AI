import redis from 'redis';
export const redisClient = redis.createClient()

redisClient.on('error', (err) => console.log('Redis client error', err));

(async ()=>{
    await redisClient.connect();
    console.log('Redis client connected');
})();
