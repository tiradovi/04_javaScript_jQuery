$(function () {
  getUsers();
});

function getUsers() {
  $.get("https://jsonplaceholder.typicode.com/users").done(function (data) {
    // 모든 사용자를 map을 활용하여 리스트 목록형태로 표시
    /* 
    
    onclick = HTML 요소에서 클릭 이벤트를 직접 연결하는 속성
    클릭했을 때 실행할 JS 코드 작성
    getUserDetail() 실행할 함수의 이름 = 사용자 상세 정보를 가져오는 함수
    getUserDetail() -> data에서 가져온 유저 목록을 순회하여
                       user 1명씩 보유하고 있는 id를 주소값으로 사용하여
                       map으로 유저 정보를 하나씩 보여줄 때 유저 데이터에는
                       id, name, username, email, address등의 데이터 보유
    관리자가 보길 원하는 회원 유저의 이름을 클릭했을 때 해당하는 유저의 id 값을
    getUserDetail() 내부 매개변수 값으로 전달하고, 해당하는 유저의 정보를 확인할 수 있도록 설정ㄴ

    userList 라는 변수 이름대신 data.map()내부의 형태를 사용할 수 있으나 
    가독성을 위해 분리
    */
    const userList = data
      .map(
        (user) =>
          `<p class="user-detail" onclick="getUserDetail(${user.id})">
            ${user.name}님 - ${user.id}</p>`
      )
      .join(""); // map 뒤의 , 제거

    $("#usersList").html(`<div class="success">
        <h3>전체 사용자 목록</h3>
        ${userList} 
        </div>`);
  });
}

function getUserDetail(userId) {
  $("#userResult").html(
    '<div class="loading">사용자 상세 정보를 가져오는 중...</div>'
  );

  $.get(`https://jsonplaceholder.typicode.com/users/${userId}`).done(function (
    data
  ) {
    $("#userResult").html(`
                    <div class="success">
                        <div class="user-card">
                            <h3>👤 ${data.name} (ID: ${data.id})</h3>
                            <p><strong>사용자명:</strong> ${data.username}</p>
                            <p><strong>이메일:</strong> ${data.email}</p>
                            <p><strong>전화번호:</strong> ${data.phone}</p>
                            <p><strong>웹사이트:</strong> ${data.website}</p>
                            <p><strong>회사:</strong> ${data.company.name}</p>
                            <p><strong>회사 업무:</strong> ${data.company.catchPhrase}</p>
                            <p><strong>주소:</strong> ${data.address.street}, ${data.address.city}</p>
                            <p><strong>우편번호:</strong> ${data.address.zipcode}</p>
                        </div>
                    </div>
                `);
  });
}
