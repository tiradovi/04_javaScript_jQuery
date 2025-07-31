$(function () {
  //검색하기 클릭
  $("#검색기능").click(function () {
    $.get("../json/fruits.json", function (data) {
      console.log("data:", data);
      console.log("data.length:", data.length);
      /*
      json 데이터가 []로 시작시 .length 사용가능
                    {}로 시작시 Object.keys() 처리후 length로 계산
      */
      const price = $("#price").val();

      for (let i = 0; i < data.length; i++) {
        if (price == data[i].price) {
          $("#result").html(`${data[i].name} - ${data[i].price}`);
          break;
        } else {
          $("#result").html(`과일 존재X`);
        }
      }
    });
  });
});
