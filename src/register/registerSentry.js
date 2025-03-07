/**
 *｜--------------------------------------------------------------------------
 *｜Author     : 1045998323@qq.com
 *｜Class      : registerSentry
 *｜CreateTime ：2025/3/7 15:07
 *｜Notes      : 前端错误监控器
 *｜--------------------------------------------------------------------------
 */

import * as Sentry from "@sentry/vue";
import SentyConfig from "@/config/sentryConfig";

const registerSentry = (app) => {
    Sentry.init({
        app,
        dsn: SentyConfig.dsn,
        integrations: [
            Sentry.replayIntegration()
        ],
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });
}

export default registerSentry
