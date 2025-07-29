// 1번 : HTML 문서가 전부 준비되면 코드 실행
//$(document).ready(function () { 고전
//$(function () { 최신
$(function () {
  // 2번 : id가 btn 인 요소를 클릭했을 때 실행될 함수 정의
  $("#btn").click(() => {   // 화살표함수로 변경 가능
    // 3번 : id가 title인 요소의 텍스트 변경
    $("#title").text("버튼이 클릭되었습니다.");
    // 4번 : id가 description인 요소를 0.5 초간 숨겼다간 0.5초간 나타나게 하기
    $("#description").fadeOut(500).fadeIn(500);
    // 5번 : id가 box인 요소에 highlight 클래스를 추가하거나 제거
    $("#box").toggleClass("highlight");
  });
});
