$(function () {
  // 1. 확인 버튼 클릭 시 중복 체크
  $("#check").click(function () {
    const email = $("#childEmail").val().trim();

    let userList = JSON.parse(localStorage.getItem("users") || "[]");

    const isDup = userList.filter((u) => u.email === email);
    if (isDup.length > 0) {
      $("#result").html(
        `<span style="color: red;">이미 사용중인 이메일입니다.</span>`
      );
      $("#send").prop("disabled", true);
    } else {
      $("#result").html(
        `<span style="color: green;">사용가능한 이메일입니다.</span>`
      );
      $("#send").prop("disabled", false);
    }
  });

  // 2. 사용하기 버튼 클릭
  $("#send").click(function () {
    //순수 자바스크립트
    // opener.document.getElementById("inputEmail").value
    // jquery 조합
    // $("#childEmail").val()

    opener.$("#inputEmail").val($("#childEmail").val());
    window.close();
  });
});
