module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  url: env('NGINX_URL', 'https://api.betauo.com'),
  admin: {
    url: 'https://admin.betauo.com',
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
