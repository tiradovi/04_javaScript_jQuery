$(function () {
  $("#addBtn").click(addData);
  $("#searchBtn").click(searchData);
  $("#showAllBtn").click(showAllData);
  $("#clearAllBtn").click(clearAllData);
});

function addData(e) {
  e.preventDefault();
  const name = $("#name").val().trim();
  const age = $("#age").val().trim();
  const email = $("#email").val().trim();

  //기존에 저장된 데이터가 존재하는지 확인 없으면 빈 배열
  /* 
  Date.now() =ms초로 변환
  Date().toLocaleString("ko-KR");
  */
  let userList = JSON.parse(localStorage.getItem("userList") || "[]");

  // newUser 변수 이름은 소비자가 작성한 데이터를 보유한 변수 이름
  const newUser = {
    name: name,
    age: age,
    email: email,
    createAt: new Date().toLocaleString("ko-KR"), //현재 시간 저장
  };

  userList.push(newUser); //기존 userList에 새로운 유저 추가
  //여기까지는 로컬스토리지가 아닌 JS 내에서만 추가되어있는 상태

  // JS의 데이터(배열)를 문자열로 변환하여 로컬 스토리지로 저장
  localStorage.setItem("userList", JSON.stringify(userList));
  alert("로컬스토리지에 저장 완료");
}

function searchData(e) {
  e.preventDefault();
  const searchValue = $("#searchValue").val().trim();

  let userList = JSON.parse(localStorage.getItem("userList") || "[]");
/*
userList.filter((data) => data.name === searchValue);
userList에서 전달받은 목록 중에서 
.filter() : 걸러낼 것이다.
data      : data라는 변수 이름에 userList에서 가져온 정보를 담아
data.name === searchValue : 소비자가 입력한 값과 같은 값만을 담아
searchResult    : 이 변수 이름에 담겠다.
*/
  const searchResult = userList.filter((data) => data.name === searchValue);

  let html = `<h3>검색결과</h3>`;
  if (searchResult.length > 0) {
    //검색 결과를 보여줌
    html += searchResult
      .map(
        (data) => `
      <div class="item-row">
      <strong> ${data.name}님</strong></br>
      나이 : ${data.age}</br>
      이메일 : ${data.email}</br>
      가입일자 : ${data.createAt}</br>
      </div>`
      )
      .join("");
  } else {
    html += `존재하지 않는 회원입니다.`;
  }
  $("#searchResult").html(html);
}

function showAllData(e) {
  e.preventDefault();

  let userList = JSON.parse(localStorage.getItem("userList") || "[]");
  let html = `<h3>저장된 사용자 목록(총 ${userList.length}명)</h3>`;

  //for 문을 사용하되, userList값을 모두 [i]로 가져올 것
  for (let i = 0; i < userList.length; i++) {
    html += `
    ${userList[i].name}님<br>
    ${userList[i].age}세<br>
    ${userList[i].email}<br>
    가입일자 : ${userList[i].createAt}<br><br><br>
    `;
  }

  $("#allData").html(html);
}

function clearAllData(e) {
  e.preventDefault();

  if (confirm("정말로 사용자를 삭제하시겠습니까?")) {
    localStorage.clear();
    // localStorage.clear(); 내부에 존재하는 모든 데이터삭제
    // localStorage.removeItem("userList"); 특정 키만 삭제
  }
}
