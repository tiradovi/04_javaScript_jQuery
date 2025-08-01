$(function () {
  $("#animal").click(function () {
    $.get("https://extinct-api.herokuapp.com/api/v1/animal/").done(function (
      data
    ) {
      $("#result").html(`
        <img src="${data.data[0].imageSrc}">
        학명: ${data.data[0].binomialName}
        `);
    });
  });
});
