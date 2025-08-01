$(function () {
  $("#logoutBtn").hide();
  // .click() 내부에 함수 작성시 : 기능명칭만 작성할 것 () 제외해야함!!
  // 다만 특별히 메서드 내부에 함수를 작성하지 않고, 단독으로 함수를 작성할 때
  // 기능명칭();
  $("#loginBtn").click(loginCheck);
  $("#logoutBtn").click(logoutCheck);
});

function loginCheck() {
  // 1. html 내부에 소비자가 작성한 val() 값 가져오기
  const username = $("#username").val();
  const password = $("#password").val();

  if (!username || !password) {
    $("#loginResult").html(
      `<div class="error">아이디와 비밀번호를 입력하세요.</div>`
    );
    return; //if문을 탈출한 후 아래에 작성한 코드를 실행하지 못하도록 돌려보내기
  }
  $("#loginResult").html(`<div class="loading">로그인 중입니다..</div>`);
  //$.get 이용하여 json에 해당하는 username과 password가 일치하는지 확인

  $.get("../json/userInfo.json")
    // function(data){} 익명함수를 idPwCheck 함수이름으로 변경후 done내부에서 호출
    .done(function (data) {
      if (data.users[username] && data.users[username].password === password) {
        $(".form-group").hide();
        $("#loginBtn").hide();
        $("#logoutBtn").show();
        $("#loginResult").html(
          `<div class="success"><p><strong>로그인성공!</strong></p><p>${username}님 환영합니다.</p></div>`
        );
      } else {
        $("#loginResult").html(
          `<div class="error">아이디또는 비밀번호가 일치하지 않습니다.</div>`
        );
      }
    });
}
function logoutCheck() {
  //입력 필드 초기화
  $("#username").val("");
  $("#password").val("");

  // UI 복구
  $(".form-group").show();
  $("#loginBtn").show();
  $("#logoutBtn").hide();

  //로그아웃 메세지 표시
  $("#loginResult").html(`<div class="success">로그아웃 완료</div>`);

  //1초 후 로그아웃 메세지 사라지게 하기
  setTimeout(function () {
    $("#loginResult").html("");
  }, 1000);
}
