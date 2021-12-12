var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body){ //템플릿 함수화, 매개인자 title, list, body
  return`
  <!doctype html>
  <html>
  <head>
    <title> Node.js Practice - ${title} </title>
    <meta charset='utf-8'>
  </head>
  <body>
    <h1><a href="/"> WEB </a></h1>
    ${list}
    <a href="/create">create></a>
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist){ //fs 리스트 함수화, while 문 이용 unordered list
  var list = '<ul>';
  var i = 0;

  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
    i = i+1;
  }
  list = list+'</ul>';
  return list;
}

var app = http.createServer(function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  
  
  if(pathname === '/'){
    if(queryData.id === undefined){ //root 주소에 id값 미입력시 조건분기
      fs.readdir('./data', function(error, filelist){
        var title = 'Hello';
        var description = 'None Content';
        var list = templateList(filelist);
        var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
        response.writeHead(200);
        response.end(template);
      });
      
    } else { //root 주소에 id값 존재시 조건분기
      fs.readdir('./data', function(error, filelist){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          var list = templateList(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else if(pathname === '/create'){ //create 주소 이동
    fs.readdir('./data', function(error, filelist){
      var title = 'WEB - CREATE';
      var list = templateList(filelist);
      
      
      //글작성 템플릿 선언
      
      var template = templateHTML(title, list, `
        <form action="http://localhost:3000/process_create" method="post">
          <p><input type="text" name="title"></p>
          <p>
            <textarea name="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
        `);
                                    
        response.writeHead(200);
        response.end(template);
    });
  } else {
    response.writeHead(404);
    response.end('Not Found Error');
  }

});
app.listen(3000);
