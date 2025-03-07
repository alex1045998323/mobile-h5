/**
 * sentry 配置项
 */
export default {
    dsn: 'https://abc4cdda7241e4a5e9dbbc6e14a6f8ab@o4508935160594432.ingest.de.sentry.io/4508935163215952', // 替换成你项目在 Sentry 上的 DSN
    environment: process.env.NODE_ENV || 'development',
    // 其他 Sentry 配置项...
};
