$(function () {
  loadBooks();
  $("#searchBtn").click(searchFn);
});
//책 데이터 변수
let books = {};

//JSON 파일에서 책 데이터 불러오기
function loadBooks() {
  $.get("../json/books.json")
    .done(function (data) {
      books = data.books;
      console.log("책 데이터 가져오기 완료");
    })
    .fail(function () {
      console.log("실패");
    });
}
// 검색 기능
function searchFn() {
  const keyword = $("#searchInput").val().trim();

  // localStorage에 저장된 데이터를 가져오면
  // Object.values대신 JSON.parse이용
  const allBooks = Object.values(books);
  let result;
  if (!keyword) {
    result = allBooks; // 키워드가 존재하지 않을 때는 모든 책 데이터 보여주기
  } else {
    result = allBooks.filter(
      (books) => books.title.includes(keyword) || books.author.includes(keyword)
    );
    displayResults(result, keyword);
  }
}
function displayResults(result, keyword) {
  const searchResult = $("#searchResult");
  if (result.length === 0) {
    searchResult.html(`<div class="no-result">검색 결과가 없습니다.</div>`);
    return;
  }

  const booksHTML = result.map((book) => {
    let title = book.title;
    let author = book.author;

    if (keyword) {
      title = book.title.replace(
        new RegExp(keyword, "gi"),
        `<span class="hightlight">${keyword}</span>`
      );
      author = book.title.replace(
        new RegExp(keyword, "gi"),
        `<span class="hightlight">${keyword}</span>`
      );
    }
    return `<div class="book-item">
    <div class="book-title">${title}</div>
    <div class="book-author">${author}</div>
    <div class="book-price">${book.price.toLocaleString()}원</div>
    </div>`;
  });
  searchResult.html(booksHTML.join(""));
}

/*
allBooks.filter((books) => books.title.includes(keyword) || books.author.includes(keyword));

.filter() : 배열에서 조건에 맞는 것들만 새 배열로 만들어준다.
.includes() : keyword라는 명칭이 
            book.title.includes(keyword) : book.title 내에 포함되어있는가?
            book.author.includes(keyword) :book.author 내에 포함되어있는가?

book.title.replace(new RegExp(keyword, "gi"),`<span class="hightlight">${keyword}</span>`
replace() : 찾은 키워드를 다른 텍스트로 바꾸기
RegExp(keyword, "gi") = RegExp(정규표현식)으로 영어로 작성했을 경우 대소문자 구분을 무시하기 위해 사용
g = 전체적으로
i = 대소문자무시
`<span class="hightlight">${keyword}</span>` : 검색한 글자에만 하이라이트


  리스트.map((매개변수이름)=>``) : 백틱  : ${}를 사용하여 변수이름과 html태그 혼합사용 가능
  리스트.map((매개변수이름)=>{}) : 중괄호: 자바스크립트를 이용하여 로직 작성시 사용
  리스트.map((매개변수이름)=>()) : 소괄호: 값 반환할 때 사용
  */
