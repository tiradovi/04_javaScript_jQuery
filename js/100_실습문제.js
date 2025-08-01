$(document).ready(function () {
  // 문제 1: 텍스트 변경
  $("#p1-changeBtn").click(function () {
    // HINT: #p1-greeting 요소의 텍스트를 .text()를 사용해 변경하세요.
    $("#p1-greeting").text("반갑습니다.");
  });

  // 문제 2: 이미지 토글
  $("#p2-toggleBtn").click(function () {
    // HINT: #p2-myImage 요소를 .toggle()을 사용해 숨기거나 보이게 하세요. (속도를 500으로 줘보세요)
    $("#p2-myImage").toggle().fadeOut(500).fadeIn(500);
  });

  // 문제 3: 슬라이드 토글
  $("#p3-menuBtn").click(function () {
    // HINT: #p3-menuPanel 요소를 .slideToggle()을 사용해 슬라이드 효과를 주세요.
    $("#p3-menuPanel").slideToggle();
  });

  // 문제 4: 입력값 따라쓰기
  $("#p4-myInput").on("keyup", function () {
    // HINT: $(this).val()로 입력값을 가져와서 #p4-displayText에 .text()로 표시하세요.
    const inputval = $("#p4-myInput").val().trim();
    $("#p4-displayText").text(inputval);
  });

  // 문제 5: 마우스 오버 효과
  $("#p5-hoverBox").hover(
    function () {
      // HINT (마우스 올렸을 때): $(this)와 .css()를 사용해 배경색을 'darkslateblue'로 바꾸세요.
      $(this).css("background-color", "darkslateblue");
    },
    function () {
      // HINT (마우스 벗어났을 때): $(this)와 .css()를 사용해 배경색을 'lightcoral'로 되돌리세요.
      $(this).css("background-color", "lightcoral");
    }
  );

  // 문제 6: 항목 추가
  let itemCount = 1;
  $("#p6-addBtn").click(function () {
    // HINT: itemCount를 1 증가시키고, .append()를 사용해 #p6-myList에 새로운 '<li>'를 추가하세요.
    itemCount++;
    $("#p6-myList").append("<li>새로운 항목</li>");
  });

  // 문제 7: 항목 제거 (이벤트 위임)
  $("#p7-removableList").on("click", "li", function () {
    // HINT: 클릭된 자신($(this))을 .remove()를 사용해 제거하세요.
    $(this).remove();
  });

  // 문제 8: 아코디언
  $(".p8-question").click(function () {
    // HINT: 클릭된 자신($(this))의 다음에 오는(.next()) .p8-answer를 .slideToggle() 하세요.
    $(this).next().slideToggle();
  });

  // 문제 9: 카운터
  let count = 0;
  $("#p9-increaseBtn").click(function () {
    // HINT: count 변수를 1 증가시키고, #p9-countDisplay에 .text()로 표시하세요.
    count++;
    $("#p9-countDisplay").text(count);
  });
  $("#p9-decreaseBtn").click(function () {
    // HINT: count 변수를 1 감소시키고, #p9-countDisplay에 .text()로 표시하세요.
    count--;
    $("#p9-countDisplay").text(count);
  });

  // 문제 10: 애니메이션
  $("#p10-animateBtn").click(function () {
    // HINT: .animate() 메서드를 사용하세요.
    // 첫 번째 인자로 { width: "300px", opacity: 0.5 } 형태의 CSS 객체를,
    // 두 번째 인자로 시간(1500)을 전달합니다.
    // animate : 사용자 지정 메서드()
    // animate ({css속성정의}, 시간, 콜백함수)
    $("#p10-myBox").animate(
      { width: "300px", opacity: 0.5 },
      1500,
      function () {
        $("#p10-myBox").css("backgroundColor", "red");
      }
    );
  });
});
