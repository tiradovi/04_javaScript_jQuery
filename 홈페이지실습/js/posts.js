let 현재페이지 = 1;
let 전체게시물 = [];
const 페이지당게시물수 = 10;
//전역변수 posts.js 모든 곳에서 사용할 수 있는 변수이름

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
//초반에 데이터 전체를 가져오는 기능
function getAllPosts() {
  $.get("https://jsonplaceholder.typicode.com/posts").done(function (data) {
    전체게시물 = data;
    getPosts();
  });
}

//페이지에 해당하는 게시물을 보여주는 기능
function getPosts() {
  const 시작하는게시물 = (현재페이지 - 1) * 페이지당게시물수;
  const 끝인덱스 = 시작하는게시물 + 페이지당게시물수;
  const 현재페이지게시물 = 전체게시물.slice(시작하는게시물, 끝인덱스);

  //페이지 정보 업데이트
  const 총페이지수 = Math.ceil(전체게시물.length / 페이지당게시물수);
  $("#pageInfo").html(`페이지 ${현재페이지} / ${총페이지수}`);
  $("#postsResult").html(
    현재페이지게시물.map(
      (post) =>
        `
        <div class="success">
            <div class="post-item" onclick="getComment(${post.id})">
                <h4>${post.id}. ${post.title}</h4>
                <p>${post.body}</p>
            </div>
        </div>
        `
    )
  );
}

//게시물에 해당하는 댓글 가져오기
function getComment(postid) {
  $.get(`https://jsonplaceholder.typicode.com/posts/1/comments?_limit=3`).done(
    function (data) {
      $("#commentsResult").html(
        data.map(
          (commment) =>
            `
            <h4> ${commment.name} </h4>
            <h4> ${commment.email} </h4>
            <h4> ${commment.body} </h4>
            `
        )
      );
    }
  );
}
