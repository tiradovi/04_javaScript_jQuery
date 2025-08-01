let 현재페이지 = 1;

//https://dog.ceo/api/breeds/image/random
//https://api.thecatapi.com/v1/images/search

$(function () {
  randomDog(); // 처음에 강아지사진 랜덤 1장
  $("#dogResult").click(randomDog); // 그후 사진 클릭시 랜덤 강아지로 변경
  getCats();
  //페이지네이션 버튼 이벤트
  $("#prevBtn").click(function () {
    if (현재페이지 > 1) {
      현재페이지--;
      getCats();
    } else {
      alert("첫 번째 페이지입니다.");
    }
  });
  $("#nextBtn").click(function () {
    현재페이지++;
    getCats();
  });
});

function randomDog() {
  $.get("https://dog.ceo/api/breeds/image/random").done(function (data) {
    $("#dogResult").html(`<img src="${data.message}">`);
  });
}

function getCats() {
  $.get("https://api.thecatapi.com/v1/images/search?limit=10").done(function (
    data
  ) {
    $("#pageInfo").html(`페이지 ${현재페이지}`);

    const catImages = data
      .map(
        (cat) =>
          ` 
      <div class= "cat-card">
      <img src="${cat.url}" class="cat-detail" onclick="showFullImg('${cat.url}')"/>
      </div> 
          `
      )
      .join("");
    $("#catResult").html(`${catImages}`);
  });
}

function showFullImg(imageUrl) {
  // .prepend() 선택한 요소의 맨 앞에 새로운 요소(태그)추가
  /*
.prepend() = 맨 앞에 새로운 것을 이어서 추가
.append()  = 맨 뒤에 새로운 것을 이어서 추가
.html()    = 내용 전체 교체
  */

  $("#catResult").prepend(`
    <div id="abc" class="cat-modal" onclick="closeFullImg()">
    <img src="${imageUrl}" class="cat-detail-show"/>
    </div>`);
}
//close(), open() 과 같이 이미 만든 예약어 메서드나 함수 명칭은 사용지양
// 각 회사 개발자가 만든듯한 명칭으로 함수 메서드 변수이름을 만드는 것이 좋음
function closeFullImg() {
  $("#abc").remove();
}
