function required(key: string): string{
    const value = process.env[key]
    if(!value){
        throw new Error(`Missing required environment  variable: ${key}`)
    }
    return value;
} 

export const env = {
    PORT: Number(process.env['PORT']),
    MONGO_URL: required ('MONGO_URL'),
    JWT_ACCESS_SECRET: required("JWT_ACCESS_SECRET"),
    JWT_REFRESH_SECRET: required("JWT_REFRESH_SECRET"),
    NODE_ENV: process.env['NODE_ENV'] ?? 'development',
    REFRESH_TOKEN_MAX_AGE: process.env["REFRESH_TOKEN_MAX_AGE"],
    SERVER_URL: process.env['SERVER_URL'] ?? 'http://localhost:3000',
    REDIS_HOST: required('REDIS_HOST'),
    REDIS_PORT: Number(required("REDIS_PORT")),
    REDIS_PASSWORD: required("REDIS_PASSWORD"),
    SMTP_HOST: required("SMTP_HOST"),
    SMTP_PORT: Number(required("SMTP_PORT")),
    SMTP_USER: required("SMTP_USER"),
    SMTP_PASS: required("SMTP_PASS"),
}as const