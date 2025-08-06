$(function () {
  $("#signup").click(signup);
  $("#goToLogin").click(goToLogin);
});

function signup() {
  hideMessages();

  const username = $("#username").val().trim();
  const email = $("#email").val().trim();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  // 사용자 정보 저장
  const users = JSON.parse(localStorage.getItem("gbUsers") || "[]");

  const newUser = {
    id: Date.now(),
    username: username,
    email: email,
    password: password,
    createAt: new Date().toLocaleString("ko-KR"),
  };

  users.push(newUser);
  // localStorage.setItem(JSON.stringify(users));
  //register.js:26 Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 1 present.
  // setItem() 내부파라미터 한개인경우
  localStorage.setItem("gbUsers", JSON.stringify(users));
  alert("회원가입 완료");
  window.location.href = "index.html";
}

function hideMessages() {}

function goToLogin() {
  window.open("login.html", "_blank", "width=450,height=600");
  window.location.href = "index.html";
}
