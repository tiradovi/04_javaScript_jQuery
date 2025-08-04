$(function () {
  showUsers();
});

function showUsers() {
  //localStorage 에서 모든 데이터를 담을 수 있는 리스트 변수이름 생성

  let userList = JSON.parse(localStorage.getItem("userList") || "[]");

  // 사용자 총회원수 표시 userList.length

  // 사용자가 없으면 userList.length ===0 no-users

  // map 사용해서 HTML로 소비자가 유저리스트 목록을 확인할 수 있도록 설정
  const userHTML = userList.map(
    (u) => `
    <div class="user-item">
        <div class="user-id">아이디 : ${u.username}</div>
        <div class="user-pw">비밀번호 : ${u.password}</div>
    </div>
    `
  );
  $("#user-list").html(userHTML);
}
