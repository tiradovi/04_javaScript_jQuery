$(function () {
  $.get("../json/youtube.json").done(function (data) {
    console.log(data);
    $("#results").html(`
            <p> 영화제목 : ${data.result.title}   </p> 
            <p> 영화설명 : ${data.result.description}</p> 
            <img src="https://i.ytimg.com/vi/mRD0-GxqHVo/hq720.jpg">
            <p> 주소 : ${data.result.url}</p> 
            
            `);
  });

  $.get("../json/youtube.json").done(function (data) {
    const search = "#searchInput".valueOf();
    if (data.result.title == search) {
      $("results").html();
    }
  });
});
