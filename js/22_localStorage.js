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
  localStorage.setItem("username", username);
  localStorage.setItem("userpw", userpw);

  // 모두 저장후 결과페이지로 이동
  window.location.href = "22_result.html";
}
