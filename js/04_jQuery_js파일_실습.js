$(function () {
  $("#menu li").click(function () {
    $("#menu li").removeClass("active");
    $(this).addClass("active");
  });
});

/*
this : 이벤트(행위, 행동) 발생한 HTML 요소를 가리킴

#menu li: id 가 menu인 <ul> 태그 내부에 모든 <li>태그에 클릭 이벤트 설정
this : 사용자가 클릭한 <li> 태그만 바라봄 
        단순히 #menu li =this가 아닌 this는 사용자가 감지한 위치를 가리키기도 함
        $("#menu li").addClass("active"); menu안에 모든 li
        $(this).addClass("active");       사용자가 클릭한 menu li

*/

$(function () {
  $("#btn").click(() => {
    // 1. 각 입력 값의 공백 제거
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    //2. 값 중 하나라도 비어있는지 확인하기
    if (name && email && message) {
      // 모든 값이 채워져 있다면 성공 메세지를 초록색으로 표시
      $("#status").removeClass("red");
      $("#status").text("문의가 정상적으로 접수되었습니다.").addClass("green");
    } else {
      // 아니라면 실패 메세지를 빨간색으로 표시
      $("#status").removeClass("green");
      $("#status").text("모든 항목을 입력해주세요.").addClass("red");
    }
  });
});
