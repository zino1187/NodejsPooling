var conString=require("./module/dbconfig");
var obj=require("./module/StringObj");
var oracledb=require("oracledb");
var express=require("express");
var http=require("http");

/*--------------------------------------------------------------------
클래스로 선언된 사용자 정의 모듈 사용하기
--------------------------------------------------------------------*/
var ss=new obj();
console.log(ss.getStr());

/*--------------------------------------------------------------------
 커넥션 풀
--------------------------------------------------------------------*/
var pool;
oracledb.createPool(conString, function(error, connectionPool){
    pool=connectionPool;
    console.log(pool);
});

/*--------------------------------------------------------------------
웹서버
--------------------------------------------------------------------*/
app=express();
var server=http.createServer(app);

app.get("/list", function(request, response){
    pool.getConnection(function(error, con){
        if(error){
            console.log(error);
        }else{
            var sql="select writer from notice";                
            con.execute(sql, function(err, result, fields){
                if(err){
                    console.log(err);                        
                }else{
                    console.log(result);                        
                }                
                con.release(function(e){
                    if(e)console.log(e);                        
                });
            });
        }     
    });
});

server.listen(9999, function(){
    console.log("웹서버가 9999포트에서 가동 중...");
});



