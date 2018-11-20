const pg = require('pg');

const conString = "postgres://zhangliyuan:zhang123@47.100.41.42/zhang_test";
const client = new pg.Client(conString);

const PG = ()=>{
    console.log("准备向****数据库连接...");
};

PG.prototype.getConnection = ()=>{
    client.connect((err)=> {
        if (err) {
            return console.error('could not connect to postgres', err);
        }
        client.query('SELECT NOW() AS "theTime"',  (error, result) =>{
            if (error) {
                return console.error('error running query', err);
            }
            console.log("hbdfxt数据库连接成功...");
        });
    });
};

// 查询函数
// @param str 查询语句
// @param value 相关值
// @param cb 回调函数
const clientHelper = function(str,value,cb){
    client.query(str,value,(err,result)=>{
        if(err) {
            cb("err");
        }
        else{
           if(result.rows!=undefined)
                cb(result.rows);
            else
                cb();
        }
    });
}

PG.prototype.select = function(tablename,fields,returnfields,cb){
    if(!tablename) return;
    let returnStr = "";
    if(returnfields.length === 0)
        returnStr = '*';
    else
        returnStr= returnfields.join(",");
        let str = "select "+returnStr+ " from "+tablename+" where ";
        let field = [];
        let value = [];
        let count = 0;
        for(var i in fields){
            count++;
            field.push(i+"=$"+count);
            value.push(fields[i]);
        }
        str += field.join(" and ");
        clientHelper(str,value,cb);
};
 
module.exports = new PG();


