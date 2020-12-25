const pool = require('../utils/pool/pool');
const fs = require('fs');



pool.query(fs.readFileSync('./sql/next-auth.sql', 'utf-8'));
