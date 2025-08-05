$(function () {
    $("#login").click(login)
  $("#goToSignup").click(goToSignup);
});

function login(){
    
}

function goToSignup() {
  window.close();
  opener.window.location.href = "register.html";
}
