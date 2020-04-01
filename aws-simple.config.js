// @ts-check

const appName = 'maskeauf-locations';
const appVersion = process.env.APP_VERSION || 'latest';

const cacheControl = `max-age=${5 * 365 * 24 * 60 * 60}`; // 5 years

/**
 * @type {import('aws-simple').AppConfig}
 */
exports.default = {
  appName,
  appVersion,
  createStackConfig: () => ({
    customDomainConfig: {
      certificateArn: process.env.CERTIFICATE_ARN,
      hostedZoneId: process.env.HOSTED_ZONE_ID,
      hostedZoneName: 'clebert.io',
      aliasRecordName:
        appVersion === 'latest' ? appName : `${appName}-${appVersion}`
    },
    minimumCompressionSizeInBytes: 1000,
    lambdaConfigs: [
      {
        httpMethod: 'GET',
        publicPath: '/bff',
        localPath: 'dist/bff/index.js',
        description: 'BFF Lambda ${appVersion}',
        memorySize: 3008,
        timeoutInSeconds: 28,
        loggingLevel: 'INFO',
        cachingEnabled: true,
        cacheTtlInSeconds: 3600
      }
    ],
    s3Configs: [
      {
        type: 'file',
        publicPath: '/',
        localPath: 'dist/app/index.html',
        bucketPath: 'index.html',
        cachingEnabled: true,
        cacheTtlInSeconds: 3600,
        responseHeaders: {accessControlAllowOrigin: '*', cacheControl}
      },
      {
        type: 'folder',
        publicPath: '/assets',
        localPath: 'dist/app',
        responseHeaders: {
          cacheControl: cacheControl
        }
      }
    ]
  })
};
