//jQuery 이벤트 처리와 기능명칭으로 분류하여 기능 호출하기
$(function () {
  $("#btn1").click(문제1번기능);
  $("#btn2").click(문제2번기능);
  $("#btn3").click(문제3번기능);
  $("#btn4").click(문제4번기능);
  $("#btn5").click(문제5번기능);
  $("#btn6").click(문제6번기능);
  $("#btn7").click(문제7번기능);
  $("#btn8").click(문제8번기능);
  $("#btn9").click(문제9번기능);
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

// 문제 6 : 게시물 5개 가져오기 getPosts
function 문제6번기능() {
  $.get("https://jsonplaceholder.typicode.com/posts?_limit=5").done(function (
    data
  ) {
    //data가 배열 = 목록 = 리스트 형태로 다수 존재할 경우
    //data.map() 배열 형태를 하나씩 꺼내서 나열하는 메서드 사용
    $("#result6").html(data.map((i) => `<p><strong>${i.title}</strong></p>`));
  });
}

// 문제 7 : 유저 목록 모두 조회하기 userList
function 문제7번기능() {
  $.get("https://jsonplaceholder.typicode.com/users").done(function (data) {
    $("#result7").html(
      data.map(
        (user) => `
            <p>유저닉네임 : ${user.username}</p>
            <p>유저이메일 : ${user.email}</p> <br>`
      )
    );
  });
}

// 문제 8 : 검색 기능 구현하기 searchUser
function 문제8번기능() {
  // 검색된 사용자의 val 가져오기
  const searchName = $("#searchName").val();
  $.get("https://jsonplaceholder.typicode.com/users").done(function (data) {
    // filter() 기능을 이용해서 원하는 소비자 목록 줄이기
    /*
    filter()
    배열에서 조건에 맞는 것들만 골라내는 기능
    배열.filter(조건함수)
    data                    : url에서 가져온 데이터들  
    .                       : 에서
    filter(                 : 걸러낸다
    (user)                  : 하나씩data를 꺼내어 조건에 맞는 값만 user에 담기                                 
    user.name==searchName ) : 소비자가 검색한 이름과 비교(조건)
    */
    $("#result8").html(
      data
        .filter((user) => user.name == searchName)
        .map(
          (user) => `
        <p>${user.name}</p>
        <p>${user.email}</p>`
        )
    );
  });
}

// 문제 9 : 선택된 항목에 따른 데이터 가져오기 selectAlbum
function 문제9번기능() {
  const albumId = $("#albumId").val();
  $.get(
    `https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_limit=3`
  )
    .done(function (data) {
      // select 선택을 진행할 때 filter를 사용해라를 만날수 있음
      // 주소값에서 작성된 모든 데이터를 조회할 때는 filter가 필수가 아닌 선택이 됨
      $("#result9").html(
        data
          .filter((photo) => photo.albumId == albumId)
          .map(
            (photo) => `
            <p><strong>${photo.title}</strong></p>
            <p>${photo.url}</p> <br>
            `
          )
      );
    })
    .fail();
}
