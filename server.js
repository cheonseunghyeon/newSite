var http = require("http");

// http 모듈의 createServer 메소드를 호출하여 HTTP 서버 생성
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"}); // (1)
  response.write("Hello World");  // (2)
  response.end();                 // (3)
}).listen(8888);