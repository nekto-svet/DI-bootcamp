const knex = require('knex');

const dbPosts = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : '9362cdT*',
      database : 'posts_DB'
    }
  });

  module.exports = {
    dbPosts
}