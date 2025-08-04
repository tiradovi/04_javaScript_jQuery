$(function () {
  $(".register-btn").click(addProduct);
});

function addProduct(e) {
  e.preventDefault();

  const productName = $("#productName").val();
  const productPrice = $("#productPrice").val();
  const productImage = $("#productImage").val();

  // localStorage 자체가 문자열만 취급, [] 또한 ""로 감싸서 문자열 처리
  let productList = JSON.parse(localStorage.getItem("productList") || "[]");

  const newProduct = {
    productName: productName,
    productPrice: productPrice,
    productImage: productImage,
  };

  productList.push(newProduct);
  localStorage.setItem("productList", JSON.stringify(productList));
  window.location.href = "23_제품목록.html";
}
