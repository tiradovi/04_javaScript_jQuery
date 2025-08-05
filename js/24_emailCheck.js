$(function () {
  // 1. 확인 버튼 클릭 시 중복 체크
  $("#check").click(function () {
    const email = $("#childEmail").val().trim();

    // localStorage에서 users 가져오기
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    // 중복 확인
    const isDuplicate = users.some((user) => user.email === email);

    if (!email) {
      $("#result").text("이메일을 입력해주세요.");
      $("#send").prop("disabled", true);
      return;
    }

    if (isDuplicate) {
      $("#result").text("이미 사용 중인 이메일입니다.");
      $("#send").prop("disabled", true);
    } else {
      // 중복이 아니면 저장
      users.push({ email });
      localStorage.setItem("users", JSON.stringify(users));

      $("#result").text("사용 가능한 이메일입니다.");
      $("#send").prop("disabled", false); // 버튼 활성화
    }
  });

  // 2. 사용하기 버튼 클릭
  $("#send").click(function () {
    opener.document.getElementById("inputEmail").value = $("#childEmail").val();
    window.close();
  });
});
