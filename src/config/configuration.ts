export const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mongoUri: process.env.MONGO_URI,
  sapApiUrl: process.env.SAP_API_URL,
  sapClientId: process.env.SAP_CLIENT_ID,
  sapClientSecret: process.env.SAP_CLIENT_SECRET,
  sapApiKey: process.env.SAP_API_KEY,
  sapOauthUrl: process.env.SAP_OAUTH_URL,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationTime: parseInt(process.env.JWT_EXPIRATION_TIME, 10),
});
