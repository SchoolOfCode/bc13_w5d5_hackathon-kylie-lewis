const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL,
});

module.exports = {
  query: function (text, params) {
    return pool.query(text, params);
  },
};
