import { Redis } from "ioredis"
import { env } from "./env.config"

export const redis = new Redis({
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    password: env.REDIS_PASSWORD
})

redis.on("connect", ()=>{
    console.log("Redis connected");
})

redis.on("error", (err)=>{
    console.log("Redis Error", err);
})
