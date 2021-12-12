# Node.js

<h2><타입></h2><br>
    const -> 변환 불가<br>
    let -> 변환가능, 재선언 불가<br>
    var -> 버리고<br>

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
   
   <request 반입><br>
        
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
     
         
         
<h2>CREATE문</h2>
         
         
         Create 페이지 호출
         
         if(pathname === '/create') 로 리퀘스트 매핑
         create form 만들어서 response
         
         Create 데이터 POST 방식으로 전송
         
         if(pathname === '/create_process')
         let body = '';
         request.on('data', function(data){
            body = body + data;
         }); 
         
         포스트 방식 결합 후
         const qs = require('querystring'); 
         qs 선언을 이용
         
         let post = qs.parse(body);
         POST 방식 데이터 획득
         
         post.식별자 로 let 포밍후 이용 가능
         
         fs.writeFile(`저장경로`, 내용변수, 'utf8' function(err)
         
         
<h3>UPDATE문</h3>
         
         Update 페이지 호출
         
         if(pathname === '/update')
         fs.readdir / fs.readFile의 queryData.id를 통해
         해당 정보 호출 후
         form 선언 부에 value 값으로 넣음
         
         form에서 리퀘스트 매핑 지정
         
         Update 데이터 POST 방식으로 전송
         
         포스트 방식 결합 이후
         
         fs.rename(`경로명/${id}`, `data/${바뀔이름}`, function(error){
            fs.writeFile(`경로명/${바뀐이름}`, 내용변수, 'utf8', function(err){
                헤더는 302 리다이렉트
         
<h3>DELETE문</h3>
         

         Delete 페이지는 따로 두기보단
         메인 뷰에서 form 으로 바로 처리할 수 있게함
         
         Delete_process 호출시
         POST 방식으로 전송 이후
         
         fs.unlink(`data/${id}`, function(error){
            302 헤더 리다이렉트
         
         를 통해 삭제
         
         
