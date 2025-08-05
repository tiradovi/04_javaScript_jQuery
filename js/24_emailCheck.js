$(function () {
  // 1. 확인 버튼 클릭 시 중복 체크
  $("#check").click(function () {
    const email = $("#childEmail").val().trim();

    let userList = JSON.parse(localStorage.getItem("users") || "[]");
    /*
.filter(): 검색/수정시 사용하며 조건에 맞는 모든 요소를 배열로 반환하기 때문에 .length로 비교
.some() : 조건에 맞는 요소가 하나라도 있으면 true
.find() : 조건에 맞는 첫 번째 요소만 반환
.include(): 포함하는 것
    */
    const isDup = userList.some((u) => u.inputEmail === email);
    if (isDup) {
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

/*
open : 열다/ 무언가를 여는 행위
  window.open("팝업창.html"): 메인 html에서 팝업창 html을 열어준다.

opener : 열어준 것/ 개방자
  팝업창을 html을 열어준 메인 html을 의미

  opener.document.querySelector("선택자"): 나를 열어준 메인 html에서 선택자에 해당하는 태그
  
  opener.$("#inputEmail").val($("#childEmail").val());
  => 메인 html의 inputEmail의 아이디를 가진 값에 현재html의 childEmail의 값을 value로 전달
  */
