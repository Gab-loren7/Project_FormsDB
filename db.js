const {Pool} = require('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'senai',
    port: 5432,
});

pool.connect()
.then(() => console.log("✅ Conexão bem sucedida ao PostgresSQL"))
.catch(err => console.error("❌ Falha na Conexão", err))

module.exports = pool;