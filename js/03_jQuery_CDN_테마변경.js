// ready가 아닌 현대방식의 웹문서 기능 설정 환경

$(() => {
  $("#toggleBtn").click(() => {
    $("body").toggleClass("dark-mode");
  });
});
