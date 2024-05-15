const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7103';

const PROXY_CONFIG = [
  {
    context: [
      "/api/voting/candidates", "/api/voting/voters", "/api/voting/addentity", "/api/voting/castvote"
    ],
    target,
    secure: false
  }
]

module.exports = PROXY_CONFIG;
