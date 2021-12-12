# Node.js

<h2><타입></h2>
  const -> 변환 불가
  let -> 변환가능, 재선언 불가
  var -> 버리고

<h2><서버 설계></h2>
1. const http = require('http'); 서버 객체 생성<br>
2. const app = http.createServer(function(request, response){<br>

  
    <주소> let _url = request.url;
    <쿼리 데이터> let queryData = url.parse(_url, true).query;
      <리퀘스트 매핑> let pathname = url.parse(_url,true).pathname;
   
    <서버 내 구동 구문 작성>
      if(pathname === '/') 이프문으로 컨트롤러 역할 수행
      <이중 이프문>
        queryData.id 를 통해 쿼리스트링 데이터로 판별가능 (Like Session Scope)
        (undefined 체크)
   
   <<<request 반입>>><br>
        
        request.on('data', function(data){
        <데이터 패러미터 가공가능>
        });
        request.on('end', function(){
        <종료 함수>
        });
   
   
   <response 반환><br>
     
     response.writeHead(200); 헤드 반환
     (302는 리다이렉션 , {Location: `/`})
     (404는 에러)
     response.end(패러미터); 템플릿 (뷰화면) 반환
     });

     

3. app.listen(3000); 포트번호 연결<br><br><br>

          

<h2>파일 리더</h2><br>
     
     const fs = require('fs');
     
     fs.readdir('./경로명', function(error, filelist){
          fs.readFile(`경로명/파일명`, 'utf8', function(err, description){
        
          });
     });
     
<h2>모듈화</h2>
     
     <메인 js에서 임포트>
     const 객체명 = require('./파일명.js');
       
     <모듈 공유 선언>
     module.exports = {
     
       기능명:function(패러미터){
          return;
       }
     }
     
