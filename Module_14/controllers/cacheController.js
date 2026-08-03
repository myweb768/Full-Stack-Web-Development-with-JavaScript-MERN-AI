import {redisClient} from '../config/redis.js';

export const setCache = async (req, res)=>{
    try{
        const {title, message} = req.body;
        const data = JSON.stringify({title, message});

        await redisClient.setEx('tempDate', 300, data);
        res.status(200).json({success:true, message: 'Data cache set successfully'});
    }catch(error){
        res.status(500).json({success:false, message: error.message});
    }
}

export const getCache = async (req, res)=>{
    try{
        const data = await redisClient.get('tempDate');
        if(!data){
            return res.status(404).json({success: false, message: 'No cache data found'});
        }
        res.status(200).json({success: true, data: JSON.parse(data)});
    }catch(error){
        res.status(500).json({success:false, message: error.message});
    }
}

