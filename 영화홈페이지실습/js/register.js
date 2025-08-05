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
}

function goToLogin(){
  window.location.href = "login.html";
}