$(function () {
  $(".attrDiv").attr("style", "margin-top:10px");

  $("#changeImage").click(imgFn);
  $("#changeAlt").click(altFn);
  $("#changeLink").click(linkFn);
  $("#disableInput").click(disInputFn);
  $("#enableInput").click(enInputFn);
  $("#checkAttr").click(attrFn);
  $("#checkProp").click(propFn);
  $("#setData").click(setFn);
  $("#getData").click(getFn);
});

function imgFn(e) {
  e.preventDefault();
  $("#moviePoster").attr("src", "../img/pumkin.png");
}
function altFn(e) {
  e.preventDefault();
  $("#moviePoster").attr("alt", "알트 속성이 변경되었습니다.");
  $("#moviePoster").attr("id", "logo");
}
function linkFn(e) {
  e.preventDefault();
  $("#link").attr("href", "https://google.com");
}
function disInputFn(e) {
  e.preventDefault();
  $("#textInput").attr("disabled", true).addClass("disabled");
  // $("#textInput").attr("disabled", true);
  // $("#textInput").attr("disabled", "disabled");
  // $("#textInput").attr("disabled", "");
  // 셋다 같음
}
function enInputFn(e) {
  e.preventDefault();
  $("#textInput").removeClass("disabled").removeAttr("disabled", true);
  //  $("#textInput").removeClass("disabled").
  //  $("#textInput"). removeAttr("disabled");
}

/*
.attr(): HTML 코드에 써진 속성 초기값 그대로 보임, 속성을 설정할 때 변경사항까지 작성 필요
.prop(): 사용자와 상호작용하며, 현재 상태 확인 가능
*/
function attrFn(e) {
  e.preventDefault();
  const checked = $("#checkbox").attr("checked");
  //attr로 속성 변경을 원한다면 아래 세가지중 하나 필요
  // $("#checkbox").attr("checked","checked");
  // $("#checkbox").attr("checked",true);
  // $("#checkbox").attr("checked","");

  alert(".attr() 결과:" + (checked || "없음"));
}
function propFn(e) {
  e.preventDefault();
  const checked = $("#checkbox").prop("checked");
  alert(".attr() 결과:" + checked);
}
function setFn(e) {
  e.preventDefault();
  $("#dataElement").attr("data-id", "12345");
  alert("data-id 가 설정되었습니다.");
}
function getFn(e) {
  e.preventDefault();
  const dataId = $("#dataElement").attr("data-id");
  alert("data-id :", dataId || "없음");
}
