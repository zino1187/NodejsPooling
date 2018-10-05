var http=require("http");
var fs=require("fs");
var obj=require("./module/StringObj"); //모듈을 불러온다

ss=new obj(); //모듈이 곧 클래스 이므로 new 할수 있다. 이때 이름은 
console.log(ss.getStr());

var server=http.createServer();
server.on("request", function(request, response){
    /* 
    fs.readFile("./test.html", function(error, data){
        //response.writeHead(200,{"Content-Type":"image/jpg"});
        response.writeHead(200,{"Content-Type":"text/html"});
        response.end(data);
    });
    */    
});

/* 
server.listen(9999, function(){
    console.log("웹서버가 9999포트에서 실행중...");    
}); 
*/