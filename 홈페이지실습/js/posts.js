let 현재페이지 = 1;
let 전체게시물 = [];
const 페이지당게시물수 = 10;
$(function () {
  getAllPosts();

  $("#prevBtn").click(function () {
    if (현재페이지 > 1) {
      현재페이지--;
      getPosts();
    } else {
      alert("첫 페이지입니다.");
    }
  });
  $("#nextBtn").click(function () {
    const 총페이지수 = Math.ceil(전체게시물.length / 페이지당게시물수);
    if (현재페이지 < 총페이지수) {
      현재페이지++;
      getPosts();
    } else {
      alert("마지막 페이지입니다.");
    }
  });
});
function getAllPosts() {
  $.get("https://jsonplaceholder.typicode.com/posts").done(function (data) {
    전체게시물 = data;
    getPosts();
  });
}

function getPosts() {
  const 시작하는게시물 = (현재페이지 - 1) * 페이지당게시물수;
  const 끝인덱스 = 시작하는게시물 + 페이지당게시물수;
  const 현재페이지게시물 = 전체게시물.slice(시작하는게시물, 끝인덱스);
  $("#pageInfo").html(`페이지 ${현재페이지}`);
  //페이지 정보 업데이트
  const 총페이지수 = Math.ceil(전체게시물.length / 페이지당게시물수);
  $("#postsResult").html(
    현재페이지게시물.map(
      (post) =>
        `
        <div class="success">
            <div class="post-item">
        
                <h4>${post.id}. ${post.title}</h4>
                <p>${post.body}</p>
            </div>
        </div>
        `
    )
  );
}
