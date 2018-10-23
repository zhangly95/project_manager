const db = {};
const pg = require('pg');

const conString = 'postgres://zhangliyuan:zhang123@47.100.41.42/zhang_test';



db.query = function query(sql,callback){
    if(!sql){
        callback();
        return;
    }
    const client = new pg.Client(conString);
    client.connect((error)=>{
        if(error){
            console.log(error);
             client.end();
             return; 
            }
            client.query(sql, (err, result)=> {
               
                client.end(); 
                if(err) {
                  return console.error('error running query', err);
                }
                callback(result)
              });
})

}

module.exports = db;

const sql = 'select * from ied_design';
db.query(sql,(result)=>{
    console.log(result.rows)
})

