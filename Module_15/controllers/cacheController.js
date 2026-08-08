import {redisClient} from '../config/redis.js';

export const setNote = async (req, res)=>{
    try{
        const {note}= req.body;
        if(!note){
            return res.status(400).json({error: 'Note is required'});
        }

        await redisClient.setEx('tempData', 600, note);
        res.status(200).json({message: 'Note saved successfully'});
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
}
export const getNote = async (req, res)=>{
    try{
        const data = await redisClient.get('tempData');
        if(!data){
            return res.status(404).json({error: 'Note not Found!!'});
        }
        res.status(200).json({note: data});
            }catch(error){
                res.status(500).json({error: 'Internal Server Error'});
            }
}
export const deleteNote = async (req, res)=>{
    try{
        const result = await redisClient.del('tempData');
        if(!result){
            return res.status(404).json({error: 'Note not Found!!'});
        }
        res.status(200).json({message: 'Note deleted successfully'});
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
}