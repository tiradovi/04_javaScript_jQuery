$(function () {
  $("#add").click(() => {
    $("#boxArea").append("<div class='box'>박스</div>");
  });
  $("#del").click(() => {
    $(".box:last").remove();
  });
});
