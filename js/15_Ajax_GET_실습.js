//jQuery 이벤트 처리와 기능명칭으로 분류하여 기능 호출하기
$(function () {
  $("#btn1").click(문제1번기능);
  $("#btn2").click(문제2번기능);
  $("#btn3").click(문제3번기능);
  $("#btn4").click(문제4번기능);
  $("#btn5").click(문제5번기능);
});

// 문제 1 : 기본 텍스트 데이터 가져오기
function 문제1번기능() {
  $.get("https://jsonplaceholder.typicode.com/posts/1", function (data) {
    $("#result1").html(
      `<div class="success">
      <strong>게시물 제목 : </strong>${data.title} </br>
      <strong>게시물 내용 : </strong>${data.body}
      </div>`
    );
  });
}

// 문제 2 : 사용자 정보 표시하기 userInfo
function 문제2번기능() {
  const ui = $("#userId").val();
  $.get(`https://jsonplaceholder.typicode.com/users/${ui}`)
    // 1. 데이터를 무사히 가져오는 것을 성공
    .done(function (data) {
      // username = 닉네임아이디, name = 이름
      if (!data.id || !data) {
        $("#result2").html(
          `<div class="error">해당 사용자를 찾을 수 없습니다.</div>`
        );
        return; // 데이터가 없으므로 아래 기능 사용하지 못하도록 돌려보내기
      }
      $("#result2").html(
        `<div class="success">
      <strong>이름 : </strong>${data.name} </br>
      <strong>이메일 : </strong>${data.email}</br>
      <strong>전화번호 : </strong>${data.phone}</br>
      </div>`
      );
    })
    // 2. 주소접근 불가능한 에러
    .fail(function () {
      //url 접근 자체가 불가능한 상황
      $("#result2").html(
        `<div class="error">
        해당 사용자를 찾을 수 없습니다. (404 error 발생) 주소 접근 X
        </div>`
      );
    });
}

// 문제 3 : 랜덤 명언 가져오기 getRandom
function 문제3번기능() {
  $.get("http://api.quotable.io/random")
    .done(function (data) {
      $("#result3").html(
        `
            <div class="success">
            <blockquote>${data.content}</blockquote><br>
            <strong> ${data.author}</strong>
            </div>
            `
      );
    })
    .fail(function () {
      $("#result3").html(
        `
        <div class="error">
        명언 가져오기 실패
        </div>
        `
      );
    });
}

// 문제 4 : 댓글 .length 개 성공적으로 가져왔다 표시하기 getComment
function 문제4번기능() {
  $.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    .done(function (data) {
      $("#result4").html(
        `
        <div class="success">
            댓글${data.length}개를 성공적으로 불러왔습니다. <br><br>
            첫번째 댓글 : ${data[0].body} 
        </div>
        `
      );
    })
    .fail(() => {
      $("#result4").html(`<div class="error">댓글 가져오기 실패</div>`);
    });
}

// 문제 5 : 에러 처리하기 errorFn
function 문제5번기능() {
  $.get("https://jsonplaceholder.typicode.com/posts/999999")
    .done(function (data) {
      $("#result5").html(
        `<div class="success">데이터를 성공적으로 불러왔습니다.</div>`
      );
    })
    // error 가 발생했을 때도 파라미터 자리에 data를 사용이 가능하나 지양
    .fail(function (xhr) {
      $("#result5").html(
        `
          <div class="error">에러 발생.
          <strong> 상태 코드  : </strong>${xhr.status}<br>
          <strong> 에러메세지 : </strong>${xhr.statusText}<br>
          </div>
        `
      );
    });
}
