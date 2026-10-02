const dotenv = require('dotenv');
dotenv.config();
const app = require('./app')
const {connectDB} = require('./src/config/db.config');
const {connectRedis} = require('./src/config/redis.config');

const PORT = process.env.PORT || 5000 ;

const serverStart = async ()=>{
    try {
        await connectDB();
        await connectRedis()

        app.listen(PORT, ()=>{
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.error("❌ Server start failed:", error.message);
        process.exit(1);
    }
};

serverStart();