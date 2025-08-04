$(function () {
  $("a").click(signUp);
});
function signUp(e) {
  e.preventDefault(); // 기본 링크 동작 방지, 제출하기 일시정지 상태로 아래 정규식, 데이터 저장 확인후 이동

  const username = $("#userName").val();
  const userpw = $("#userPw").val();

  //서버로 전송할 데이터
  //userData 형식 또한 DB 저장할 때 사용
  const userData = {
    username: username,
    password: userpw,
  };

  // json 저장할 때 사용 예정 DB에 저장할 때 등장 $.post()

  // localStorage 에 저장
  // username과 userpw는 맨 마지막에 가입된 사람의 정보로 덮어쓰기됨
  // 기존 회원 목록 가져오기 (없으면 빈 배열 형태)
  // 배열에 기존 회원 목록 뒤에 새로 가입한 유저의 목록 추가
  // localStorage에 변수가 아닌 리스트로 저장해야함
  // 기존 회원 목록 가져오기 없으면 빈배열 형태
  let userList = JSON.parse(localStorage.getItem("userList") || "[]"); //문자열을 배열, 리스트로 변환
  /*
localStorage는 문자열만 저장 가능
  
JSON.parse()     :  JSON 형식의 문자열(String)을 javascript의 객체나 배열로 변환
                    문자열 -> 객체 배열 형태로 변환
JSON.stringify() :  javascript의 객체(Object)나 배열(Array)를 JSON 형식의 문자열(String)변환
                    객체 or 배열 -> 문자열 변환

.setItem("키이름", 값) : 데이터를 저장할 때 사용
                        마치 물건에 이름표(키)를 붙여 사물함에 넣는 것과 같음
.getItem("키이름")     : setItem으로 저장해둔 데이터를 가져올 때 사용
                        사물함에서 이름표(키)를 보고 물건을 꺼내는 것과 같음

단순한 글자나 숫자 데이터를 저장할 때는 parse()나 stringify()작성 필요 없음
문자열 형태로 하나씩 저장되기 때문

그러나 배열이나 목록은 문자열 형태로 저장된 형태를 배열이나 리스트 형태로 변환해서
JavaScript 내부에 활용할 것이기 때문에 변환 필요
*/

  // 새 회원 정보를 담을 json형태의 배열 생성
  const newUser = {
    username: username,
    password: userpw,
  };

  // 배열에 기존 회원 목록 추가
  //localStorage에 배열로 저장 -> userList.html에서 유저 목록을 확인하기 위한 저장형태
  /*
  userList = localStorage 에 키 명칭으로 지정되어 있는 유저 목록 담고 있는 변수이름
  push()   = 브라우저에서 저장된 리스트가 있든 없는 .push()저장한다. 뒤로 추가
  newUser  = 위에서 소비자가 작성한 값을 키:username 값:username 형태를 가져와서 저장
  */

  userList.push(newUser);
  localStorage.setItem("userList", JSON.stringify(userList)); //localStorage저장할 때는 배열, 리스트 -> 문자열 형태로 변환

  // result.html에서 개별 사용자가 본인이 회원가입을 무사히 했는지 확인하기 위한 변수이름 저장형태
  localStorage.setItem("username", username);
  localStorage.setItem("userpw", userpw);

  // 모두 저장후 결과페이지로 이동
  window.location.href = "22_result.html";
}

/*
  localStorage에서 회원가입을 진행
  입력된 정보는 두가지 형태로 저장
  개별 정보 : 현재 가입한 사용자의 아이디(username)과 비밀번호(userpw)가 단일 항목 저장
  목록 정보 : 기존 회원 목록에 현재 가입한 사용자의 정보를 추가하여 전체 회원 목록(userList) 배열 형태로 저장

  result.html : 가입이 완료되면 개별 가입 확인을 위해 결과 페이지로 이동
  localStorage에 저장된 개별 정보를 가져와 소비자가 작성한 데이터를 확인할 수 있도록 설정

  userList.html : 가입이 모두 완료되어 localStorage에 저장된 목록 확인
  localStorage에 저장된 목록 정보를 가져와 사이트에 가입한 모든 회원의 아이디와 비밀번호를 화면에 표시
  브라우저 정보를 지우기 까지 유효
*/
