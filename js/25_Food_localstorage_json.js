$(function () {
  showAllFoodData();
  $("#addBtn").click(addFoodData);
  $("#searchBtn").click(searchFoodData);
  $("#showAllBtn").click(showAllFoodData);
  $("#clearAllBtn").click(clearAllFoodData);
});

/**
 *
 * @param {*} e : 파라미터에 대한 설명 작성공간
 */
function addFoodData(e) {
  e.preventDefault();
  const foodName = $("#foodName").val().trim();
  const price = $("#price").val().trim();
  const category = $("#category").val().trim();

  let foodList = JSON.parse(localStorage.getItem("foodList") || "[]");

  const newFood = {
    id: Date.now(),
    foodName: foodName,
    price: price,
    category: category,
    createAt: new Date().toLocaleString("ko-KR"),
  };

  foodList.push(newFood);
  $("#foodName, #price, #category").val("");

  localStorage.setItem("foodList", JSON.stringify(foodList));
  alert("로컬스토리지에 저장 완료");
}

function searchFoodData(e) {
  e.preventDefault();
  const searchValue = $("#searchValue").val().trim();

  let foodList = JSON.parse(localStorage.getItem("foodList") || "[]");

  const searchResult = foodList.filter((food) => food.foodName === searchValue);

  let html = `<h3>검색결과</h3>`;
  if (searchResult.length > 0) {
    //검색 결과를 보여줌
    html += searchResult
      .map(
        (food) =>
          `      <div class="item-row">
        <div>
          <strong>🍽️ ${food.foodName}</strong><br>
          💰 가격: ${food.price}원<br>
          📂 카테고리: ${food.category}<br>
          📅 등록일: ${food.createAt}
         </div>  </div>
          `
      )
      .join("");
  } else {
    html += `존재하지 않는 음식입니다.`;
  }

  $("#searchResult").html(html);
}

function showAllFoodData(e) {
  /*
showAllFoodData(e) : 행동이 들어왔을 때 행동에 대한 결과를 수행
버튼이나 input 처럼 특정행위가 없을 때는 undefined(행동전달x, 단순페이지 오픈상태)

if (e) e.preventDefault(); 이벤트가 들어왔을 때만 태그속성 멈추기
*/

  if (e) e.preventDefault();

  let foodList = JSON.parse(localStorage.getItem("foodList") || "[]");

  let html = `<h3>🍽️ 저장된 음식 목록 (총 ${foodList.length}개)</h3>`;

  for (let i = 0; i < foodList.length; i++) {
    html += `
      <div class="item-row">
        <div>
          <strong>🍽️ ${foodList[i].foodName}</strong><br>
          💰 가격: ${foodList[i].price}원<br>
          📂 카테고리: ${foodList[i].category}<br>
          📅 등록일: ${foodList[i].createAt}
        </div>
      </div>
    `;
  }

  $("#allData").html(html);
}

function clearAllFoodData(e) {
  e.preventDefault();

  if (confirm("정말로 모든 음식 데이터를 삭제하시겠습니까?")) {
    localStorage.removeItem("foodList");
    $("#allData").html("<p>저장된 음식 데이터가 없습니다.</p>");
    alert("모든 음식 데이터가 삭제되었습니다.");
  }
}
