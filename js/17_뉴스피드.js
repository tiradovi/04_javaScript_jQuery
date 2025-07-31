const URL = "../json/news.json";

$(function () {
  뉴스불러오기();
  $("#loadBtn").click(검색하기);
});

// input && category  -> 검색이 일치하는 데이터만 조회하기 [과제]
function 검색하기() {
  $.get(URL).done(function (data) {
    $("#newsContainer").html(
      data
        .filter(
          (category) =>
            category.category == $("#categoryFilter").val() &&
            category.title == $("#search").val()
        )
        .map(
          (category) =>
            `
            <div class="news-card">
                <div class="news-title">${category.title} </div>
                <div class="news-content">${category.content}</div>
            </div>
          `
        )
    );
  });
}

function 뉴스불러오기() {
  $.get(URL).done(function (data) {
    $("#newsContainer").html(
      data.map(
        (i) =>
          `
            <div class="news-card">
                <div class="news-title">${i.title} </div>
                <div class="news-content">${i.content}</div>
            </div>
          `
      )
    );
  });
}
