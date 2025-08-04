$(function () {
  displayProducts();
  $("#delete-btn").click(deleteProducts);
});

function displayProducts() {
  let productList = JSON.parse(localStorage.getItem("productList") || "[]");

  $("#product-grid").html(
    productList
      .map(
        (p) =>
          `
    <div class="product-card">
       <div class="product-info">
       <img src="${p.productImage}" alt ="${p.productName}"/>
           <div class="product-name">제품이름 : ${p.productName}</div>
           <div class="product-price">제품가격 : ${p.productPrice}원</div>    
        </div>
    </div>
      `
      )
      .join("")
  );
}

function deleteProducts(e) {
  e.preventDefault(); // a의 href로 이동하는 기본 동작 방지

  // 사용자에게 정말 삭제할 것인지 최종 확인
  if (confirm("정말 모든 제품을 삭제하시겠습니까?")) {
    // confirm에서 확인을 눌렀을 경우 localstorage productList에서 데이터만 제거
    localStorage.removeItem("productList");

    alert("모든 상품이 삭제되었습니다.");
    location.reload();
    $("#product-grid").html(`<p class="no-items">등록된 상품이 없습니다.</p>`);
  }
}
