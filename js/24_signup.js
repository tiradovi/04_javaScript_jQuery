$(function () {
  // 1. 중복확인 버튼 클릭 시 팝업 열기
  $("#emailCheck").click(function () {
    // 팝업 설정
    const popupWidth = 500;
    const popupHeight = 400;

    const left = (window.screen.width - popupWidth) / 2;
    const top = (window.screen.height - popupHeight) / 2;
    // TODO: 화면 중앙에 팝업 띄우기
    const options = ` 
  width =${popupWidth},
  height=${popupHeight},
  left=${left},
  top=${top},`;
    window.open("24_emailCheck.html", "_blank", options);
  });

  // 2. 회원가입 폼 제출
  $("#signupForm").submit(function (e) {
    e.preventDefault();

    const inputEmail = $("#inputEmail").val().trim();
    const phone = $("#phone").val().trim();

    let userList = JSON.parse(localStorage.getItem("users") || "[]");

    const newUser = {
      inputEmail: inputEmail,
      phone: phone,
    };
    userList.push(newUser);
    localStorage.setItem("users", JSON.stringify(userList));
    $("#inputEmail, #phone").val("");
    alert("제출완료");
  });
});
