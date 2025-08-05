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
}

function showAllData(e) {
  e.preventDefault();
}

function clearAllData(e) {
  e.preventDefault();
}
