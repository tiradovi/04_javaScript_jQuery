$(function () {
  loadMovies();
  $("#openLoginPopup").click(openLoginPopup);
  $("#moveRegister").click(goToSignup);
});

function loadMovies() {
  $.get("https://ghibliapi.vercel.app/films")
    .done(function (data) {
      $(".loading").hide();
      displayMovies(data);
    })
    .fail(function () {});
}

// 영화 목록 표시
function displayMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    const movieCard = `
                    <div class="movie">
                        <h3>${movies[i].title}</h3>
                        <p class="year">개봉년도: ${movies[i].release_date}</p>
                        <p><strong>감독:</strong> ${movies[i].director}</p>
                        <p><strong>제작자:</strong> ${movies[i].producer}</p>
                        <p>
                        <span class="detail-link" onclick="goToDetail('${
                          movies[i].id
                        }')">
                        ${
                          movies[i].description.substring(0, 50) + "...상세보기"
                        }
                        </span>
                        </p>
                        <img src="${movies[i].image}">
                    </div>
                `;
    $(".movies").append(movieCard);
  }
}
// 로그인 팝업 열기
function openLoginPopup() {
  const popup = window.open(
    "login.html",
    "loginPopup",
    "width=450,height=700,left=650,top=40"
  );
}

// 회원가입 페이지로 이동
function goToSignup() {
  window.location.href = "register.html";
}
function goToDetail(movieId) {
  // ?key=value
  // ? 뒤는 매개변수로 전달 받은 값을 detail.html에 전달하겠다
  // detail.html로 들어가면 -> 상세페이지에서 표시할 내용X가 뜸
  window.location.href = `detail.html?id=${movieId}`;
}
