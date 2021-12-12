# Node.js

서버생성

http 객체 생성 -> require('http');
host, port 객체 생성

http.createServer -> 패러미터 Request, Response

헤더설정 'Content-Type' : 'text/plain'
end 지정 ( template 객체에 html ` ` 로 지정하여 뷰 생성 )

생성된 서버 객체 .listen ( 패러미터 port, host)

QueryString 이용하여 동적 웹페이징 가능

request.url -> url 주소
url.pares(_url, true).query; -> Query 데이터
queryData.속성명 -> 이용하여 html 단에 ${} 부분 동적 수정 가능

파일 읽기 객체선언 require('fs');
.readFile('.txt', 'utf8', function(err, data){

or

.readFile(`data/${queryData.id}`,'utf8', function(err, description){

배열선언 var args = process.argv;
실질적으로 2번 인덱스부터 이용가능

.readdir( folder명, function(error, filelist)


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

request.url 로 전체 url주소 불러옴

url.parse(_url, true).query;
url.parse(_url, true).pathname;
을 통하여

pathname ('/~')
queryData.id ('?id=') 

컨트롤러 역할 수행 가능

