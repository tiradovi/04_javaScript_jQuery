$(function () {
  $("#btn").click(loadWatch);
});
function loadWatch() {
  $.get("https://www.themealdb.com/api/json/v1/1/random.php").done(function (
    data
  ) {
    const meal = data.meals[0];

    if (meal) {
        const youtubeUrl =meal.strYoutube;
      // replace() : 특정 문자열을 특정문자열로 변환
      const embedURL = youtubeUrl.replace("watch?v=", "embed/");
      $("#result").html(
        `
        <iframe
        src="${embedURL}"
         allow="accelerometer; 
         autoplay; 
         clipboard-write; 
         encrypted-media; 
         gyroscope; 
         picture-in-picture; 
         web-share"></iframe>
        `
      );
    } else {
      $("#result").html(`영상 존재X`);
    }
  });
}
