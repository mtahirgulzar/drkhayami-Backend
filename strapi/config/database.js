// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "20.245.156.204"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "drkhayami"),
      user: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "February2022@"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      // ssl: {
      //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      // },
    },
    debug: false,
  },
});
