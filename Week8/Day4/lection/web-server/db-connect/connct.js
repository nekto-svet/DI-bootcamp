const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgress',
      password : '9362cdT*',
      database : 'connect_nodejs'
    }
  });