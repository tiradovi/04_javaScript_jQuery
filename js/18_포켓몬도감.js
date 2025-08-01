let 현재페이지 = 1;
$(function () {
  pokeInfo(1); //클릭 없이 호출

  $("#prevBtn").click(() => {
    if (현재페이지 > 1) {
      현재페이지--;
      pokeInfo(현재페이지);
    } else alert("마지막 이전페이지입니다.");
  });
  $("#nextBtn").click(() => {
    현재페이지++;
    pokeInfo(현재페이지);
  });
});
// 숫자 배열을 만드는 함수
function range(start, end) {
  /*
    ...
    Array() : 배열 생성
    end - start + 1 = 10개의 배열을 생성하겠다.
    .keys() : 키들의 값으로 숫자를 넣겠다. 배열은 0부터 시작
    .map((i)=>i+start) : 시작값 더하기
    */
  return [...Array(end - start + 1).keys()].map((i) => i + start);
}

function pokeInfo(page) {
  // 하나의 포켓몬을 개발자가 지정해서 선택한 상황
  const startId = (page - 1) * 10 + 1;
  const ids = range(startId, startId + 9);

  $("#pokemonContainer").html(""); //페이지 변경될 때마다 기존 데이터 없애기
  $("#pageInfo").html(`페이지 ${page}`);
  ids.map((i) => {
    $.get(`https://pokeapi.co/api/v2/pokemon/${i}`).done(function (data) {
      $("#pokemonContainer").html(
        $("#pokemonContainer").html() +
          `
     
      <img src="${data.sprites.front_default}">
      `
      );
    });
  });
}
