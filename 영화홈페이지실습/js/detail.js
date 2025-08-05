$(function () {
  //상세보기에 해당하는 id를 index.js에서 ?로 전달받아$.get에 사용

  /*
  URLSearchParams = 자바스크립트 개발자 자체에서 추가적으로 필요한 기능으로 판단하여 만든 내장객체

  URL   Search  Params
  주소  검색     파라미터 가져오기

  (window.location.search)
  현재 컴퓨터 . 현재 주소위치에서. 검색한다음
  
  .get("?뒤에 작성된 키 이름")
        키 명칭을 가져올 것이다. 키 명칭을 가져와서 키 명칭 내부안에 작성된 값을
        
  전달받은id확인이라는 변수에 입력

  */
  const 전달받은id확인 = new URLSearchParams(window.location.search).get("id");
  loadMovieDetail(전달받은id확인);
});

function loadMovieDetail(전달받은id확인) {
  $.get(`https://ghibliapi.vercel.app/films/${전달받은id확인}`).done(function (
    data
  ) {
    $(".loading").hide();
    무비상세보기(data);
  });
}

function 무비상세보기(movie) {
  $("#movieDetail").show();
  $("#movieTitle").text(movie.title);
  $("#movieYear").text(movie.release_date+"년");
  $("#movieDirector").text(movie.director);
  $("#movieProducer").text(movie.producer);
  $("#movieRelease").text(movie.release_date);
  $("#movieRuntime").text(movie.running_time);
  $("#movieDescription").text(movie.description);
  $("#moviePoster").attr("src", movie.image);
}
