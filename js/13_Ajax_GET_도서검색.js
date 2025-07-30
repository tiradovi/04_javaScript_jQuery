$(function () {
  $("#도서검색").click(function () {
    //Json 파일에서 도서 데이터 가져오기
    $.get("../json/books.json", function (data) {
      // data 에서 length를 활용해서 총 몇 개의 도서가 존재하는지 확인
      // for , while 대신 총개수 가져오는 방법
      // 객체.keys(data.books).length
      // 객체는 length 사용할 때 단독으로 사용할 수 없고, keys values키들이나 값을 모아서 확인
      // 배열을 length 바로 사용가능
      const totalBooks = Object.keys(data.books).length;
      $("#result").html(`
            <div> 총 ${totalBooks}개의 도서가 존재합니다.</div>
            `);

      // 1. bookTitle로 도서 값 val()가져오기
      // 2. author 저자 값 val()가져오기
      const bookTitle = $("#bookTitle").val();
      const author = $("#author").val();
      if (data.books[bookTitle]) {
        //책 제목이 존재한다면
        if (data.books[bookTitle].author === author) {
          //책 제목+저자가 존재한다면

          $("#result").removeClass("error");
          $("#result").addClass("success");
          $("#result").html(`<div class="book-info"><h3>도서 찾기 성공</h3>
                <p><strong>제목 : ${data.books[bookTitle].title} </strong></p>
                <p><strong>저자 : ${data.books[bookTitle].author} </strong></p>
                <p><strong>가격 : ${data.books[bookTitle].price} </strong></p>
               </div> `);
          $("#도서검색").hide();
          $("#검색초기화").show();
        } else {
          $("#result").html(`저자 없음`);
          $("#result").removeClass("success");
          $("#result").addClass("error");
        }
      } else {
        //책 제목이 존재하지 않는 다면
        $("#result").html(`책 없음`);
        $("#result").removeClass("success");
        $("#result").addClass("error");
      }
    });
  });
  $("#검색초기화").click(function () {
    $("#도서검색").show();
    $("#검색초기화").hide();
    $("#bookTitle").val("");
    $("#author").val("");
    $("#result").html("초기화가 완료되었습니다.");
  });
});
